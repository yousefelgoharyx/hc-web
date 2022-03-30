import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const newItem = () => {
  const { query } = useRouter();
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default newItem;
