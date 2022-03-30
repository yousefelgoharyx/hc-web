import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Game from "../../components/Game/Game";
import styles from "./index.module.scss";
const index = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>الالعاب الرياضية</h1>
        </div>
        <div className={styles.newsGrid}>
          <Game title="كرة قدم" href="/sports/single/2" />
          <Game title="كرة قدم" />
          <Game title="كرة قدم" />
          <Game title="كرة قدم" />
          <Game title="كرة قدم" />
          <Game title="كرة قدم" />
        </div>
      </div>
    </div>
  );
};

export default index;
