import { useRouter } from "next/router";
import React from "react";

const newItem = () => {
  const { query } = useRouter();
  return <div>{query.id}</div>;
};

export default newItem;
