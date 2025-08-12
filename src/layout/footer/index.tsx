import { Container } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
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
      <div className={styles.wrap}>
        <footer className={styles.footer}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.inner_wrapper}>
                <Link className={styles.logo} href="/">
                  <NextImage src="/images/logo.png" alt="AMESL" />
                </Link>
                <p>
                  ISO 9001:2008 certified engineering and marine services
                  company providing top-tier solutions since 2007
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
                        <FaXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">
                        <FaYoutube />
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
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <Link href="javascript:void(0)">
                      Marine & Industrial Services
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">Technical Consultancy</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      Fabrication & Erection
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      Export-Import & Supply
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">Underwater Inspection</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      Heavy Equipment Rental
                    </Link>
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
                © 2025 Alif Marine & Engineering Services Ltd. All rights
                reserved.
              </p>
              <p className={styles.copyright}>Powered by JIONEX</p>
            </div>
          </Container>
        </footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          className={styles.wavesSvg}
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 
              58-18 88-18s
              58 18 88 18 
              58-18 88-18 
              58 18 88 18
              v44h-352z"
            />
          </defs>
          <g className={styles.waves}>
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="0"
              fill="#0A192A"
              fillOpacity=".2"
            />
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="3"
              fill="#0A192A"
              fillOpacity=".5"
            />
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="6"
              fill="#0A192A"
              fillOpacity="1"
            />
          </g>
        </svg>
      </div>
    </>
  );
}
