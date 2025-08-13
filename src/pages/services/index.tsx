import Head from "next/head";
import styles from "./services.module.scss";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import { services } from "@/constants/services";
import React from "react";
import Waves from "@/components/waves-two";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Our Services | ALIF MARINE & ENGINEERING SERVICES LTD. | AMESL
        </title>
      </Head>

      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.bg}>
            <Waves />
          </div>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Our Services</h2>
              <p>
                Comprehensive engineering solutions for marine and industrial
                sectors, delivered with expertise and precision.
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.services}>
          <Container>
            <div className={styles.row}>
              {services.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.image}>
                    <NextImage src={item.image} alt={item.title} />
                  </div>
                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
