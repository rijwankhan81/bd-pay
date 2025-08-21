"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./slider.module.scss";
import { Container } from "react-bootstrap";
import { FaComment } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Small Business Owner",
    image: "/images/testimonials/rahim.jpg",
    review:
      "BD PAY has transformed how I run my business. I can now accept payments easily and my customers love the convenience. The real-time sales tracking is a game-changer!",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "University Student",
    image: "/images/testimonials/nusrat.jpg",
    review:
      "BD PAY made my life easier, I pay bills in seconds! No more standing in long queues for utilities. I also love how easy it is to split costs with friends.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Kamal Hossain",
    role: "Online Shop Owner",
    image: "/images/testimonials/kamal.jpg",
    review:
      "Integrating BD PAY with my e-commerce store was simple and quick. My sales increased by 30% as customers prefer the smooth checkout experience!",
    rating: 4,
  },
  {
    id: 4,
    name: "Shamima Akter",
    role: "Freelancer",
    image: "/images/testimonials/shamima.jpg",
    review:
      "As a freelancer, BD PAY helps me receive international payments quickly and securely. I no longer worry about delays, and it gives me more time to focus on my work.",
    rating: 5,
  },
  {
    id: 5,
    name: "Hasan Chowdhury",
    role: "Restaurant Owner",
    image: "/images/testimonials/hasan.jpg",
    review:
      "BD PAY has made managing my restaurant much easier. Customers pay through QR codes and I track all transactions in real-time. It’s reliable and super convenient.",
    rating: 4.5,
  },
];

const Testimonials: FC = () => {
  return (
    <section className={styles.testimonials}>
      <Container>
        <div className={styles.head}>
          <h2>
            <FaComment />
            What Our Users Say
          </h2>
          <p>
            Join thousands of satisfied users who trust BD PAY for their daily
            transactions
          </p>
        </div>
        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <img src={t.image} alt={t.name} className={styles.avatar} />
                    <div>
                      <h3>{t.name}</h3>
                      <p>{t.role}</p>
                    </div>
                  </div>
                  <p className={styles.review}>"{t.review}"</p>
                  <div className={styles.rating}>
                    {"★".repeat(Math.floor(t.rating))}
                    {t.rating % 1 !== 0 ? "☆" : ""}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
