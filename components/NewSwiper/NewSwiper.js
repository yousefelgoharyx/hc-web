import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import resolveImage from "../../utils/resolveImage";
import New from "../New/New";
import styles from "./NewSwiper.module.scss";
const NewSwiper = ({ news }) => {
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
          {news.length > 0 ? (
            news.map((newItem) => (
              <SwiperSlide key={newItem.id}>
                <New
                  image={resolveImage(newItem.image)}
                  title={newItem.title}
                  id={newItem.id}
                  date={newItem.date}
                />
              </SwiperSlide>
            ))
          ) : (
            <div className="empty">لا اخبار</div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default NewSwiper;
