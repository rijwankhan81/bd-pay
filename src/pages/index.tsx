import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { whyChooseBN, whyChooseEN } from "@/constants/whyChoose";
import { getStartedBN, getStartedEN } from "@/constants/getStarted";
import NextImage from "@/hooks/NextImage";
import { FaChartLine, FaDownload, FaLock, FaRocket } from "react-icons/fa";
import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import {
  FaArrowRightLong,
  FaHandsHolding,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import { paymentPartnerBN, paymentPartnerEN } from "@/constants/paymentPartner";
import { growBusinessBN, growBusinessEN } from "@/constants/growBusiness";
import { securityBN, securityEN } from "@/constants/security";
import Testimonials from "@/components/testimonials/testimonials";
import Getapp from "@/components/getApp";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;
  const whyChoose = selectedLanguage === "en" ? whyChooseEN : whyChooseBN;
  const security = selectedLanguage === "en" ? securityEN : securityBN;
  const growBusiness =
    selectedLanguage === "en" ? growBusinessEN : growBusinessBN;
  const paymentPartner =
    selectedLanguage === "en" ? paymentPartnerEN : paymentPartnerBN;
  const getStarted = selectedLanguage === "en" ? getStartedEN : getStartedBN;

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>
          BD PAY | Bangladesh's next-generation digital payment gateway — fast,
          secure, and built for everyone
        </title>
      </Head>

      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.content}>
                <h1>{t("Simplify Your Payments with BD PAY")}</h1>
                <p>{t("Simplify Your Payments with BD PAY Des")}</p>
                <div className={styles.btns}>
                  <Link className={styles.one} href="/e">
                    <BsBoxArrowInRight />
                    {t("Get Started")}
                  </Link>
                  <Link className={styles.two} href="/e">
                    <FaDownload /> {t("Download App")}
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.whyChoose}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>
                <FaRegCircleQuestion /> {t("Why Choose BD PAY")}
              </h2>
              <p>{t("Why Choose BD PAY Des")}</p>
            </div>
            <div className={styles.row}>
              {whyChoose.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.getStarted}>
          <Container>
            <div className={styles.head}>
              <h2>
                <FaRocket /> {t("Getting Started is Easy")}
              </h2>
              <p>{t("Getting Started is Easy Des")}</p>
            </div>
            <div className={styles.row}>
              {getStarted.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.number}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={styles.icons}>
                    {item.icon}
                    {item.icon2}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.paymentPartner}>
          <Container>
            <div className={styles.row}>
              <div className={styles.content}>
                <h2>
                  <FaHandsHolding /> {t("Your Everyday Payment Partner")}
                </h2>
                <p>{t("Your Everyday Payment Partner Des")}</p>
                <ul>
                  {paymentPartner.map((item) => (
                    <li key={item.title}>
                      <div className={styles.icon}>{item.icon}</div>
                      <div className={styles.text}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className={styles.btn}>
                  <Link className={styles.one} href="/services">
                    {t("Download App")} <FaDownload />
                  </Link>
                </div>
              </div>
              <div className={styles.image}>
                <NextImage src={"/images/app.svg"} alt={""} />
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.growBusiness}>
          <Container>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/grow.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <h2>
                  <FaChartLine />
                  {t("Grow Your Business with BD PAY")}
                </h2>
                <p>{t("Grow Your Business with BD PAY Des")}</p>
                <ul>
                  {growBusiness.map((item) => (
                    <li key={item.title}>
                      <div className={styles.icon}>{item.icon}</div>
                      <div className={styles.text}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className={styles.btn}>
                  <Link className={styles.one} href="/services">
                    {t("Become a Merchant")} <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.security}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>
                <FaLock /> {t("Safe, Reliable & Trusted")}
              </h2>
              <p>{t("Safe, Reliable & Trusted Des")}</p>
            </div>
            <div className={styles.row}>
              {security.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <Testimonials />
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
