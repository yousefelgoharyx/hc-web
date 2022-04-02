import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import New from "../../components/New/New";
import instance from "../../utils/axios";
import resolveImage from "../../utils/resolveImage";
import styles from "./index.module.scss";
const index = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>اخر الاخبار</h1>
        </div>
        <div className={styles.pcontainer}>
          <div className={styles.newsGrid}>
            {data.map((item) => (
              <New
                title={item.title}
                date={item.createdAt}
                image={resolveImage(item.image)}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  try {
    const res = await instance.get("/api/news");
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
