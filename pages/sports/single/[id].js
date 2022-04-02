import { useRouter } from "next/router";
import React from "react";
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

          <div>
            <div className={styles.subtitle}>
              <h3>اللاعبين</h3>
            </div>

            <div className={styles.newsGrid}>
              {data.GamePlayers.map((item) => (
                <Person title={item.name} image={resolveImage(item.image)} />
              ))}
            </div>
          </div>
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
