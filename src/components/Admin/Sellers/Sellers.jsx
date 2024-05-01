import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Sellers.css";
import Loader from "../../Common/Loader/Loader";

const Sellers = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sellers, setSellers] = useState([]);

  // useEffect(() => {
  //   console.log("component Mount");
  //   return () => {
  //     console.log("compont un mount");
  //   };
  // }, [name]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setSellers(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h2>Sellers</h2>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      {isLoading && (
        <div>
          {" "}
          <Loader />
        </div>
      )}
      {sellers.map((seller) => (
        <p key={seller.id}>{seller.name}</p>
      ))}
    </>
  );
};

export default Sellers;
