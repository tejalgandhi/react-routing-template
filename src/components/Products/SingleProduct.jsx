import React from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <div className="product">
      <h2 style={{ color: "red" }}> Single Product {id}</h2>
    </div>
  );
};

export default SingleProduct;
