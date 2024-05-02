import React, { useEffect, useState } from "react";
import ApiClient from "../../../utiles/api-client";

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
    ApiClient.get("/users")
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
    ApiClient.post("/users", newSeller)
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
      return seller.id !== id;
    });
    setSellers(filterSeller);
    ApiClient.delete(`/users/${id}`)
      .then((res) => {
        // setSellers(res);
      })
      .catch((err) => {
        setErrors(err.message);
        setSellers(sellers);
      });
  };
  const updateSeller = (id) => {
    const filterSeller = sellers.map((seller) => {
      if (seller.id == id) {
        seller.name = seller.name + " updated";
      }
      return seller;
    });
    setSellers(filterSeller);
    axios
      .patch(`https://jsonplaceholder.typicode.com/users/${id}`, filterSeller)
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
            <tr key={seller.id}>
              <td>{seller.name}</td>
              <td>
                <button onClick={() => deleteSeller(seller.id)}>
                  delete seller
                </button>
                <button onClick={() => updateSeller(seller.id)}>
                  Update seller
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
