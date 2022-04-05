import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import resolveImage from "../../utils/resolveImage";
import Game from "../Game/Game";
import styles from "./Games.module.scss";
const Games = ({ games }) => {
  return (
    <div className={styles.gamesContainer}>
      <div className="container">
        <div className={styles.head}>
          <h1>الالعاب الرياضية</h1>
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
          {games.length > 0 ? (
            games.map((newItem) => (
              <SwiperSlide key={newItem.id}>
                <Game
                  href={`/sports/${newItem.type}/${newItem.id}`}
                  image={resolveImage(newItem.image)}
                  title={newItem.name}
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

export default Games;
