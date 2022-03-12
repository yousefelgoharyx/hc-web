import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import New from "../New/New";
import styles from "./NewSwiper.module.scss";
const NewSwiper = () => {
  return (
    <div className={styles.news}>
      <div className="container">
        <div className={styles.newsHead}>
          <h1>الاخبار</h1>
        </div>
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
            <New />
          </SwiperSlide>
          <SwiperSlide>
            <New />
          </SwiperSlide>
          <SwiperSlide>
            <New />
          </SwiperSlide>
          <SwiperSlide>
            <New />
          </SwiperSlide>
          <SwiperSlide>
            <New />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewSwiper;
