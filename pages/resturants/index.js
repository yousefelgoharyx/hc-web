import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./index.module.scss";
import Resturant from "../../components/Resturant/Resturant";
import instance from "../../utils/axios";
import resolveImage from "../../utils/resolveImage";
const index = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>المطاعم والاماكن العامة</h1>
        </div>
        <div className={styles.newsGrid}>
          {data.map((item) => (
            <Resturant
              id={item.id}
              image={resolveImage(item.image)}
              title={item.title}
              href={`/resturants/${item.id}`}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  try {
    const res = await instance.get("/api/publicplaces");
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
