import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import resolveImage from "../../utils/resolveImage";

import Person from "../Person/Person";
import styles from "./People.module.scss";
const People = ({ people }) => {
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
          {people.length > 0 ? (
            people.map((newItem) => (
              <SwiperSlide key={newItem.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Person
                    title={newItem.title}
                    image={resolveImage(newItem.image)}
                    job={newItem.job}
                    cv={resolveImage(newItem.cv)}
                  />
                </div>
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

export default People;
