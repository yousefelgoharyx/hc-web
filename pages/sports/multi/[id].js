import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../../../components/Navbar/Navbar";
import Person from "../../../components/Person/Person";
import styles from "../index.module.scss";
import instance from "../../../utils/axios";
import resolveImage from "../../../utils/resolveImage";

const newItem = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>{data.name}</h1>
        </div>
        <div className={styles.pcontainer}>
          <div>
            <div className={styles.subtitle}>
              <h3>الجهاز الفني والاداري</h3>
            </div>

            <div className={styles.newsGrid}>
              {data.GameModerators.map((item) => (
                <Person
                  job={item.type}
                  title={item.name}
                  image={resolveImage(item.image)}
                />
              ))}
            </div>
          </div>
          <div className={styles.title}>
            <h1>الفرق</h1>
          </div>
          {data.GameTeams.map((item) => (
            <div>
              <div className={styles.subtitle}>
                <h3>{item.name}</h3>
              </div>
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
                    {data.GamePlayers.filter(
                      (player) => player.teamId === item.id
                    ).map((ele) => (
                      <SwiperSlide>
                        <Person
                          title={ele.name}
                          image={resolveImage(ele.image)}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  try {
    const res = await instance.get(`/api/game/${context.query.id}`);
    return {
      props: {
        data: res.data,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: { notFound: true },
    };
  }
}
export default newItem;
