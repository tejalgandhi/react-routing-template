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

  const addSeller = (e) => {
    const newSeller = {
      name,
      id: sellers.length + 1,
    };
    setSellers([newSeller, ...sellers]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newSeller)
      .then((res) => {
        setSellers([res.data, ...sellers]);
      })
      .catch((err) => {
        setErrors(err.message);
        setSellers(sellers);
      });
  };
  const deleteSeller = (id) => {
    const filterSeller = sellers.filter((seller) => {
      return seller.id != id;
    });
    setSellers(filterSeller);
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        // setSellers(res);
      })
      .catch((err) => {
        setErrors(err.message);
        setSellers(sellers);
      });
  };

  return (
    <>
      <h2>Sellers</h2>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <button onClick={addSeller}>Add Seller</button>
      {isLoading && (
        <div>
          {" "}
          <Loader />
        </div>
      )}
      {errors && <em>{errors}</em>}
      <table>
        <tbody>
          {sellers.map((seller) => (
            <tr>
              {" "}
              <td>{seller.name}</td>
              <td>
                {" "}
                <button onClick={() => deleteSeller(seller.id)}>
                  delete seller
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Sellers;
