import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import instance from "../utils/axios";
import styles from "./matches.module.scss";
import resolveImage from "../utils/resolveImage";
const Match = (props) => {
  return (
    <div className={styles.match}>
      <div className={styles.opponent}>
        <div className={styles.image}>
          <div
            style={{
              backgroundImage: `url('${resolveImage(props.fTeamImage)}')`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          ></div>
        </div>
        <div>{props.fTeamName}</div>
      </div>
      <div className={styles.info}>
        <div>{props.matchTime}</div>
        <div>VS</div>
        <div>
          {props.fTeamScore} / {props.sTeamScore}
        </div>
      </div>
      <div className={styles.opponent}>
        <div className={styles.image}>
          <div
            style={{
              backgroundImage: `url('${resolveImage(props.sTeamImage)}')`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          ></div>
        </div>
        <div>{props.sTeamName}</div>
      </div>
    </div>
  );
};
const matches = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div className="nav-top">
        <div className="container" style={{ padding: "32px 32px 0" }}>
          {data.map((item) => (
            <Match
              fTeamImage={item.fTeamImage}
              sTeamImage={item.sTeamImage}
              fTeamName={item.fTeamName}
              sTeamName={item.sTeamName}
              matchTime={item.matchTime}
              location={item.location}
              fTeamScore={item.fTeamScore}
              sTeamScore={item.sTeamScore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps(context) {
  try {
    const res = await instance.get("/api/matches");
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
export default matches;
