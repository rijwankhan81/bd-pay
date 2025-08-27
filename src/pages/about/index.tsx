import Head from "next/head";
import styles from "./about.module.scss";
import { Container } from "react-bootstrap";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import React from "react";
import Getapp from "@/components/getApp";
import { whatWeDoBN, whatWeDoEN } from "@/constants/whatWeDo";
import { smartVisionBN, smartVisionEN } from "@/constants/smartVision";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;
  const whatWeDo = selectedLanguage === "en" ? whatWeDoEN : whatWeDoBN;
  const smartVision = selectedLanguage === "en" ? smartVisionEN : smartVisionBN;

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>About Us | BD PAY</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.content}>
                <h1>
                  {t("Bangladesh's Next-Generation Digital Payment Platform")}
                </h1>
                <p>
                  {t(
                    "Bangladesh's Next-Generation Digital Payment Platform Des"
                  )}
                </p>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.mission}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.icon}>
                  <FaBullseye />
                </div>
                <h2>{t("Our Mission")}</h2>
                <p>{t("Our Mission Des")}</p>
              </div>

              <div className={styles.col}>
                <div className={styles.icon}>
                  <FaEye />
                </div>
                <h2>{t("Our Vision")}</h2>
                <p>{t("Our Vision Des")}</p>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.whatwedo}>
          <Container>
            <div className={styles.head}>
              <h2>{t("What We Do")}</h2>
              <p>{t("What We Do Des")}</p>
            </div>
            <div className={styles.row}>
              {whatWeDo.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.security}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>
                <FaHeart /> {t("Our Commitment to Bangladesh")}
              </h2>
              <p>{t("Our Commitment to Bangladesh Des")}</p>
            </div>
            <div className={styles.row}>
              {smartVision.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <Getapp />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
