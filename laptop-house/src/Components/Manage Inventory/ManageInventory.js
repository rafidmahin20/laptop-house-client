import React from "react";
import { useNavigate } from "react-router-dom";
import useItem from "../Hooks/useItem";
import bin from "../../Images/delete.png";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {
  const [items, setItems] = useItem();
  const navigate = useNavigate();
  const navigateToAddInventories = () => {
    navigate("/addinventories");
  };
  const handleDelete = id =>{
    const proceed = window.confirm('You Sure?');
    if(proceed){
      const url = `http://localhost:5000/inventorypage/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data =>{
          toast(data);
          const remaining = items.filter(item => item._id !== id);
          setItems(remaining);
        })
    }
  }
  return (
    <main>
      <div className="flex justify-center mt-10">
        <button
          onClick={navigateToAddInventories}
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add New Items
        </button>
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
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
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
              {items.map((item) => (
                <>
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                      <td className="px-6 py-4 whitespace-nowrap">
                          <img className="h-12 w-12 rounded-full" src={item.picture} alt=""/>
                      </td>
                    <td
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {item.name}
                    </td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4">{item.short_description}</td>
                    <td className="px-6 py-4">{item.supplier_name}</td>
                    <td className="px-6 py-4 text-right ">
                      <button onClick={() => handleDelete(item._id)} className=" bg-red-500 w-8 h-8 rounded">
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
      <ToastContainer/>
    </main>
  );
};

export default ManageInventory;
