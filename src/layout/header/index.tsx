import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NextImage from "@/hooks/NextImage";
import Head from "next/head";
import { navItemsBN, navItemsEN } from "@/constants/navMenu";
import { useActiveSectionNav } from "@/components/useActiveSectionNav";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/modules/languageSwitch";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "next-i18next";
export default function Header() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  // ✅ Pick correct navItems based on language
  const navItems = selectedLanguage === "en" ? navItemsEN : navItemsBN;

  // ✅ Pass navItems AFTER it's defined
  const { activeSection, handleLinkClick } = useActiveSectionNav(navItems);

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };

  const isClient = useLanguage();
  if (!isClient) return null;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Bangladesh's next-generation digital payment gateway — fast, secure, and built for everyone. Send money, pay bills, shop online, and grow your business — all in one app"
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <header id="header" className={styles.header}>
        <div className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.logo}>
                <Link className={styles.navLink} href="/">
                  <NextImage src={"/images/logo.svg"} alt={""} />
                </Link>
              </div>
              <ul className={`${show ? styles.show : ""} ${styles.menu}`}>
                {navItems.map((item) => {
                  const hashPart = item.href.includes("#")
                    ? item.href.split("#")[1]
                    : null;

                  const isActive =
                    (hashPart && activeSection === hashPart) ||
                    (!hashPart && pathname === item.href);

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
                <LanguageSwitcher />
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
