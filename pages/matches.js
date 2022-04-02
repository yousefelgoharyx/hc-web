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
          <img
            src={resolveImage(props.fTeamImage)}
            alt={props.fTeamImage}
            width={128}
            height={128}
            layout="fill"
          />
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
          <img
            src={resolveImage(props.sTeamImage)}
            alt={props.sTeamImage}
            width={128}
            height={128}
            layout="fill"
          />
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
