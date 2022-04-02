import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./index.module.scss";
import Resturant from "../../components/Resturant/Game";
import Person2 from "../../components/Person2/Person2";
import resolveImage from "../../utils/resolveImage";
import instance from "../../utils/axios";
const index = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>الهيكل التنظيمي</h1>
        </div>
        <div className={styles.newsGrid}>
          {data.map((item) => (
            <Person2
              job={item.job}
              title={item.name}
              image={resolveImage(item.image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps(context) {
  try {
    const res = await instance.get("/api/influentialperson/organizational");
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
