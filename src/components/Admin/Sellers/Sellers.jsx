import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Sellers.css";
import Loader from "../../Common/Loader/Loader";

const Sellers = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [sellers, setSellers] = useState([]);

  // useEffect(() => {
  //   console.log("component Mount");
  //   return () => {
  //     console.log("compont un mount");
  //   };
  // }, [name]);

  useEffect(() => {
    setIsLoading(true);
    // fetchSellers();
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setSellers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors(err.message);
        setErrors(err.message);
        console.log("error");
      });
  }, []);

  // const fetchSellers = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     setSellers(res.data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsLoading(false);
  //     setErrors(err.message);
  //     console.log("error");
  //   }
  // };

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
      {errors && <em>{errors}</em>}
      {sellers.map((seller) => (
        <p key={seller.id}>{seller.name}</p>
      ))}
    </>
  );
};

export default Sellers;
