import Head from "next/head";
import styles from "./individuals.module.scss";
import { Container } from "react-bootstrap";
import React from "react";
import Getapp from "@/components/getApp";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "@/hooks/NextImage";
import { individualEN, individualBN } from "@/constants/Individual";
import { bdpayHelpsyouEN, bdpayHelpsyouBN } from "@/constants/bdpayHelpsyou";
import { servicesEN, servicesBN } from "@/constants/servicesIndividual";

export default function Individuals() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;
  const individual = selectedLanguage === "en" ? individualEN : individualBN;
  const bdpayHelpsyou =
    selectedLanguage === "en" ? bdpayHelpsyouEN : bdpayHelpsyouBN;
  const services = selectedLanguage === "en" ? servicesEN : servicesBN;
  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>For Individuals | BD PAY</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>{t("Simplify Your Everyday Payments with BD Pay")}</h1>
                  <p>{t("Simplify Your Everyday Payments with BD Pay Des")}</p>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/image1.jpg"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.individual}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Why Use BD Pay as an Individual")}</h2>
              <p>{t("Why Use BD Pay as an Individual Des")}</p>
            </div>
            <div className={styles.row}>
              {individual.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.bdpayHelpsyou}>
          <Container>
            <div className={styles.head}>
              <h2>{t("How BD Pay Helps You")}</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                <ul>
                  {bdpayHelpsyou.map((item) => (
                    <li key={item.title}>
                      <div className={styles.icon}>{item.icon}</div>
                      <div className={styles.text}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.image}>
                <NextImage src={"/images/image2.jpg"} alt={""} />
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.services}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Popular Services for Individuals")}</h2>
            </div>
            <div className={styles.row}>
              {services.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.title}</h3>
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
