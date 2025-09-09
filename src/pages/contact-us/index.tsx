import Head from "next/head";
import styles from ".//contact.module.scss";
import { Container } from "react-bootstrap";
import React from "react";
import Getapp from "@/components/getApp";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { contactInfo } from "@/constants/contactinfor";
import { supporttypeEN, supporttypeBN } from "@/constants/supportType";

export default function Contact() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;
  const supporttype = selectedLanguage === "en" ? supporttypeEN : supporttypeBN;

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Contact Us | BD PAY</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.content}>
                <h1>{t("Contact Us")}</h1>
                <p>{t("Contact Us Des")}</p>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.contact}>
          <Container className={styles.container}>
            <div className={styles.row}>
              {contactInfo.map((field, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.icon}>{field.icon}</div>
                  <div className={styles.content}>
                    <h3>{field.title}</h3>
                    <span>
                      {field.value.map((val, i) => {
                        let href = "";

                        if (field.linkType === "email") {
                          href = `mailto:${val}`;
                        } else if (field.linkType === "phone") {
                          href = `tel:${val.replace(/\s+/g, "")}`;
                        }

                        return (
                          <React.Fragment key={i}>
                            {href ? <Link href={href}>{val}</Link> : val}
                            {i < field.value.length - 1 && <br />}
                          </React.Fragment>
                        );
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.supporttype}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Customer Support")}</h2>
              <p>{t("Customer Support Des")}</p>
            </div>
            <div className={styles.row}>
              {supporttype.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.title}</h3>
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
