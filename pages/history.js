import React from "react";
import Navbar from "../components/Navbar/Navbar";
import instance from "../utils/axios";
const history = ({ data, notFound }) => {
  let content = null;
  if (data) {
    content = (
      <div
        className="rte"
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></div>
    );
  } else if (notFound) {
    content = <div className="empty">لا شيئ هنا</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="nav-top">{content}</div>
    </div>
  );
};

export async function getStaticProps(context) {
  try {
    const res = await instance.get("/api/content/history");
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

export default history;
