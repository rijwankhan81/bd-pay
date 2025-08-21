import { Container } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NextImage from "@/hooks/NextImage";
import { navItems } from "@/constants/navMenu";
import { contactInfo } from "@/constants/contactinfor";
import React from "react";
import { useActiveSectionNav } from "@/components/useActiveSectionNav";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  const { activeSection, handleLinkClick } = useActiveSectionNav(navItems);
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.inner_wrapper}>
              <Link className={styles.logo} href="/">
                <NextImage src="/images/logo-footer.svg" alt="" />
              </Link>
              <p>
                Bangladesh's next-generation digital payment gateway — fast,
                secure, and built for everyone.
              </p>
              <div className={styles.connect}>
                <ul>
                  <li>
                    <Link href="javascript:void(0)">
                      <FiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footer_menu}>
              <h3>Quick Links</h3>
              <ul>
                {navItems.map((item) => {
                  const hashPart = item.href.includes("#")
                    ? item.href.split("#")[1]
                    : null;

                  const isActive =
                    (hashPart && activeSection === hashPart) ||
                    (!hashPart && pathname === item.href);

                  return (
                    <li key={item.href} className={styles.navItem}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`${styles.nav_link} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer_menu}>
              <h3>For Business</h3>
              <ul>
                <li>
                  <Link href="javascript:void(0)">Merchant Solutions</Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">Payment Gateway</Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">API Documentation</Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">Business Dashboard</Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">Partner Program</Link>
                </li>
              </ul>
            </div>
            <div className={styles.contactInfo}>
              <h3>Contact Info</h3>
              <ul>
                {contactInfo.map((field, index) => (
                  <li key={index}>
                    <span className={styles.icon}>{field.icon}</span>
                    <span className={styles.text}>
                      {field.value.map((val, i) => {
                        let href = "";

                        if (field.linkType === "email") {
                          href = `mailto:${val}`;
                        } else if (field.linkType === "phone") {
                          href = `tel:${val.replace(/\s+/g, "")}`;
                        }

                        return (
                          <React.Fragment key={i}>
                            {href ? <a href={href}>{val}</a> : val}
                            {i < field.value.length - 1 && <br />}
                          </React.Fragment>
                        );
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footer_bootom}>
            <p className={styles.copyright}>
              © 2025 BD PAY. All rights reserved.
            </p>
            <p className={styles.copyright}>Powered by JIONEX</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
