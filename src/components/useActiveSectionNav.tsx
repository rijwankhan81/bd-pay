"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

export function useActiveSectionNav(
  navItems: NavItem[],
  headerSelector = "header",
  offsetExtra = 0
) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const pendingHashRef = useRef<string | null>(null);

  const getHeaderHeight = () => {
    const header = document.querySelector(headerSelector);
    return header ? header.getBoundingClientRect().height : 50;
  };

  const attemptScrollToHash = (hash: string | null, tries = 10) => {
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const offset = getHeaderHeight();
      const top =
        el.getBoundingClientRect().top + window.scrollY - offset - offsetExtra;

      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(hash);
      history.replaceState(null, "", `#${hash}`);
      pendingHashRef.current = null;
      return;
    }
    if (tries > 0) {
      setTimeout(() => attemptScrollToHash(hash, tries - 1), 50);
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    const [pathPart, hash] = href.split("#");

    if (hash) {
      e.preventDefault();
    }

    if (hash && (pathPart === "" || pathPart === pathname)) {
      attemptScrollToHash(hash);
    } else if (hash) {
      pendingHashRef.current = hash;
      router.push(pathPart || "/");
    } else {
      router.push(href);
    }
  };

  useEffect(() => {
    if (pendingHashRef.current) {
      attemptScrollToHash(pendingHashRef.current);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter((i) => i.href.includes("#"))
        .map((i) => i.href.split("#")[1]);

      const scrollY = window.scrollY + getHeaderHeight() + offsetExtra;
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollY >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return { activeSection, handleLinkClick };
}
