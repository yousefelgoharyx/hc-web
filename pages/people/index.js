import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./index.module.scss";
import Resturant from "../../components/Resturant/Game";
import Person2 from "../../components/Person2/Person2";
const index = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>الشخصيات المؤثرة</h1>
        </div>
        <div className={styles.newsGrid}>
          <Person2 job="Hello" title="mewo" href="/resturants/2" />
          <Person2 job="Hello" title="mewo" href="/resturants/2" />
          <Person2 job="Hello" title="mewo" href="/resturants/2" />
          <Person2 job="Hello" title="mewo" href="/resturants/2" />
          <Person2 job="Hello" title="mewo" href="/resturants/2" />
          <Person2 job="Hello" title="mewo" href="/resturants/2" />
        </div>
      </div>
    </div>
  );
};

export default index;
