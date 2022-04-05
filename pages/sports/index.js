import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Game from "../../components/Game/Game";
import styles from "./index.module.scss";
import instance from "../../utils/axios";
import resolveImage from "../../utils/resolveImage";
const index = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>الالعاب الرياضية</h1>
        </div>
        <div className={styles.newsGrid}>
          {data.map((item) => (
            <Game
              title={item.name}
              image={resolveImage(item.image)}
              id={item.id}
              href={`/sports/${item.type}/${item.id}`}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps(context) {
  try {
    const res = await instance.get("/api/game");
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
export default index;
