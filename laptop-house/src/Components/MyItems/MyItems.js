import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../Firebase/Firebase.init";
import useItem from "../Hooks/useItem";
import bin from "../../Images/delete.png";
import 'react-toastify/dist/ReactToastify.css';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  const [items, setItems] = useItem();
  useEffect(() => {
    const url = `https://protected-sea-98781.herokuapp.com/inventorypage?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [myItems, user]);

  const handleDelete = id => {
    const proceed = window.confirm("You Sure?");
    if (proceed) {
      const url = `https://protected-sea-98781.herokuapp.com/inventorypage/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-xl font-sans fony-bold text-cyan-700 pb-20 pt-10">
          My Orders
        </h1>
      </div>
     <div className="flex mt-10 mx-auto ml-10">

     <div
          className="flex mx-auto shadow-md sm:rounded-lg "
          style={{ height: "100%" }}
        >
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                 Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Sold
                </th>
                <th scope="col" className="px-6 py-3">
                  Details
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {myItems.map(myItem => (
                <>
                <div key={myItem._id} myItem={myItem}></div>
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                      <td className="px-6 py-4 whitespace-nowrap">
                          <img className="h-12 w-12 rounded-full" src={myItem.picture} alt=""/>
                      </td>
                    <td
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {myItem.name}
                    </td>
                    <td
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap w-6 h-6"
                    >
                      {myItem.email}
                    </td>
                    <td className="px-6 py-4">{myItem.price}</td>
                    <td className="px-6 py-4">{myItem.quantity}</td>
                    <td className="px-6 py-4">{myItem.sold}</td>
                    <td className="px-6 py-4">{myItem.short_description}</td>
                    <td className="px-6 py-4">{myItem.supplier_name}</td>
                    <td className="px-6 py-4 text-right ">
                      <button onClick={() => handleDelete(myItem._id)} className=" bg-red-500 w-8 h-8 rounded">
                        <img
                          src={bin}
                          alt=""
                          className="w-6 h-6 flex mx-auto"
                        />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
     </div>
    </div>
  );
};

export default MyItems;
