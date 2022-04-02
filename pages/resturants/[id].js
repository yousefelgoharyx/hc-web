import { useRouter } from "next/router";
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
  try {
    const res = await instance.get(`/api/publicplaces/${context.query.id}`);
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
