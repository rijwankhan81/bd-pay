import Head from "next/head";
import styles from "./businesses.module.scss";
import { Container } from "react-bootstrap";
import React from "react";
import Getapp from "@/components/getApp";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "@/hooks/NextImage";
import { businessEN, businessBN } from "@/constants/business";
import { solutionsEN, solutionsBN } from "@/constants/solutions";
import { featuresEN, featuresBN } from "@/constants/forbusinessFeatures";

export default function Businesses() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;
  const business = selectedLanguage === "en" ? businessEN : businessBN;
  const solutions = selectedLanguage === "en" ? solutionsEN : solutionsBN;
  const features = selectedLanguage === "en" ? featuresEN : featuresBN;
  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>For Businesses | BD PAY</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>{t("Powering Smart Payments for Growth")}</h1>
                  <p>{t("Powering Smart Payments for Growth Des")}</p>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/image3.png"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.businesses}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Why Partner with BD Pay")}</h2>
            </div>
            <div className={styles.row}>
              {business.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.solutions}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Solutions for Every Business")}</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                <ul>
                  {solutions.map((item) => (
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
                <NextImage src={"/images/image4.jpg"} alt={""} />
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.features}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Key Features for Businesses")}</h2>
            </div>
            <div className={styles.row}>
              {features.map((item) => (
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
