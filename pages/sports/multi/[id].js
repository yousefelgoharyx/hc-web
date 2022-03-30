import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../../../components/Navbar/Navbar";
import Person from "../../../components/Person/Person";
import styles from "../index.module.scss";
const newItem = () => {
  const { query } = useRouter();

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>كرة القدم</h1>
          <div>{JSON.stringify(query)}</div>
        </div>
        <div className={styles.pcontainer}>
          <div>
            <div className={styles.subtitle}>
              <h3>الجهاز الفني والاداري</h3>
            </div>

            <div className={styles.newsGrid}>
              <Person job="مدير" title="باسم طارق" />
              <Person job="مدير" title="باسم طارق" />
              <Person job="مدير" title="باسم طارق" />
              <Person job="مدير" title="باسم طارق" />
            </div>
          </div>
          {/* Name */}
          <div className={styles.title}>
            <h1>الفرق</h1>
          </div>
          <div>
            {/* Sub Name */}
            <div className={styles.subtitle}>
              <h3>فرقة ميزو</h3>
            </div>
            {/* Swiper */}
            <div className={styles.newsGrid}>
              <div>
                <Swiper
                  spaceBetween={32}
                  slidesPerView={1}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1440: {
                      slidesPerView: 4,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  loop={false}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div>
            {/* Sub Name */}
            <div className={styles.subtitle}>
              <h3>فرقة ميزو</h3>
            </div>
            {/* Swiper */}
            <div className={styles.newsGrid}>
              <div>
                <Swiper
                  spaceBetween={32}
                  slidesPerView={1}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1440: {
                      slidesPerView: 4,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  loop={false}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Person job="مدير" title="باسم طارق" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newItem;
