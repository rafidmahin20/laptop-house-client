import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InventoryDetails = () => {
  const navigate = useNavigate()
  const { inventoryId } = useParams();
  // const [inventoryDetails] = useInventoryDetails(inventoryId);
  const [inventoryDetails, setInventoryDetails] = useState({}) 
  const [isUpdated, setIsUpdated] = useState(true)
  useEffect(() => {
    const url = `https://protected-sea-98781.herokuapp.com/inventorypage/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventoryDetails(data));
  }, [inventoryDetails, isUpdated, inventoryId])
  const handleInventoryDetails = (event) =>{
    event.preventDefault();
    let quantity = parseInt(inventoryDetails.quantity)
    if(event.target.id === 'delivered'){
      quantity -= 1;
      toast('one product delivered')
    }
    if(event.target.id === 'update'){
      const updateQuantity = parseInt(event.target.quantity.value)
      quantity += updateQuantity;
      event.target.quantity.value = '';
      toast('product updated')
    }
    const updateUser = {quantity};

    const url = `https://protected-sea-98781.herokuapp.com/inventorypage/${inventoryId}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);
        if(data){
          setIsUpdated(!isUpdated)
        }
      })

  } 
  const navigateToManageInventory = () =>{
    navigate('/manageinventories');
  }
  return (
    <main>
      <div className="mt-20">
        <div className="flex justify-center pb-10">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src={inventoryDetails.picture}
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Name: {inventoryDetails.name}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Details: {inventoryDetails.short_description}
              </p>
              <h4 className="text-gray-900 text-xl font-medium mb-2">
                Price: {inventoryDetails.price}
              </h4>
              <h4 className="text-gray-900 text-xl font-medium mb-2">
                Sold: {inventoryDetails.sold}
              </h4>
              <h4 className="text-gray-900 text-xl font-medium mb-2">
                Quantity: {inventoryDetails.quantity}
              </h4>
              <form onSubmit={e => handleInventoryDetails(e)} className="flex justify-center" id='update'>
                <input
                  name="quantity"
                  id='update'
                  type="number"
                  className="bg-gray-50 borde border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-black block w-40 h-10 px-3 py-4 mt-4 font-bold"
                  placeholder="put number"
                  required
                />
                <br />
                <button
                  id='update'
                  type="submit"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Update
                </button>
              </form>
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Supplier Name: {inventoryDetails.supplier_name}
              </h5>

              <button onClick={handleInventoryDetails}
                id='delivered'
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
          <button onClick={navigateToManageInventory}
            
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Manage Inventory
          </button>
          <ToastContainer/>
        </div>
    </main>
  );
};

export default InventoryDetails;
