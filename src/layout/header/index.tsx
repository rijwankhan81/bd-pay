import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import NextImage from "@/hooks/NextImage";
import Head from "next/head";
import { navItems } from "@/constants/navMenu";
import { useActiveSectionNav } from "@/components/useActiveSectionNav";
import { usePathname } from "next/navigation";
import router from "next/router";
export default function Header() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const { activeSection, handleLinkClick } = useActiveSectionNav(navItems);

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <header id="header" className={styles.header}>
        <div className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.logo}>
                <Link className={styles.navLink} href="/">
                  <NextImage src={"/images/logo.png"} alt={""} />
                </Link>
              </div>
              <ul className={`${show ? styles.show : ""} ${styles.menu}`}>
                {navItems.map((item) => {
                  const hashPart = item.href.includes("#")
                    ? item.href.split("#")[1]
                    : null;

                  const isActive =
                    (hashPart && activeSection === hashPart) ||
                    (!hashPart && pathname === item.href); // ✅ use pathname here

                  return (
                    <li
                      key={item.href}
                      className={styles.navItem}
                      onClick={toggleClass}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`${styles.navLink} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.btns}>
                <div className={styles.btn}>
                  <Link className={styles.navLink} href="/e">
                    Request a Quote
                  </Link>
                </div>
                <div className={styles.hamMenu} onClick={toggleClass}>
                  <GiHamburgerMenu />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
