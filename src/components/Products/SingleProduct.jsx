import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="product">
      <h2 style={{ color: "red" }}> Single Product {id}</h2>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default SingleProduct;
