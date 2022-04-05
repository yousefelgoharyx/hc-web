import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import instance from "../../utils/axios";
import resolveImage from "../../utils/resolveImage";

const newItem = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div className="nav-top">
        <div className="container">
          <div className="rte">
            <img src={resolveImage(data.image)} alt={data.title} />
          </div>
          <div
            className="rte"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await instance.get("/api/news/" + context.params.id);

  return {
    props: {
      data: res.data,
    },
  };
}

export default newItem;
