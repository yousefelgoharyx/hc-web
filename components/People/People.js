import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Game from "../Game/Game";
import Person from "../Person/Person";
import styles from "./People.module.scss";
const People = () => {
  return (
    <div className={styles.gamesContainer}>
      <div className="container">
        <div className={styles.head}>
          <h1>الشخصيات المؤثرة</h1>
        </div>
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          loop={false}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Person title="كرة القدم" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Person title="كرة القدم" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Person title="كرة القدم" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Person title="كرة القدم" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Person title="كرة القدم" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Person title="كرة القدم" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Person title="كرة القدم" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Person title="كرة القدم" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default People;
