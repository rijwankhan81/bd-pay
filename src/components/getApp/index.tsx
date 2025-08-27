import styles from "./getapp.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";
import NextImage from "@/hooks/NextImage";
import { FaMobileAlt } from "react-icons/fa";
import React from "react";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "next-i18next";

export default function Getapp() {
  const { t } = useTranslation();

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <section className={styles.getApp}>
        <Container>
          <div className={styles.row}>
            <div className={styles.content}>
              <div className={styles.icon}>
                <FaMobileAlt />
              </div>
              <h2>{t("Start Your Digital Payment Journey Today")}</h2>
              <p>{t("Start Your Digital Payment Journey Today Des")}</p>

              <div className={styles.btn}>
                <Link className={styles.one} href="/services">
                  <NextImage src={"/images/google-play.png"} alt={""} />
                </Link>
                <Link className={styles.one} href="/services">
                  <NextImage src={"/images/app-store.png"} alt={""} />
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <NextImage src={"/images/getapp.png"} alt={""} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
