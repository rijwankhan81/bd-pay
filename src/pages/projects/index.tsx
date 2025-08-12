import Head from "next/head";
import styles from "./projects.module.scss";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import React from "react";
import { projects } from "@/constants/projects";
import { FaCalendarAlt } from "react-icons/fa";
import Waves from "@/components/waves-two";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Our Projects | ALIF MARINE & ENGINEERING SERVICES LTD. | AMESL
        </title>
      </Head>

      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.bg}>
            <Waves />
          </div>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Our Projects</h2>
              <p>
                Explore our portfolio of completed projects, showcasing our
                expertise and commitment to excellence.
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.projects}>
          <Container>
            <div className={styles.row}>
              {projects.map((item) => (
                <div key={item.title} className={styles.col}>
                  <div className={styles.image}>
                    <NextImage src={"/images/hm-banner.jpg"} alt={item.title} />
                  </div>
                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <h4 className={styles.date}>
                      <FaCalendarAlt /> {item.date}
                    </h4>
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
