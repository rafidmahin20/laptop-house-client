import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetails from '../Hooks/useInventoryDetails';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [inventoryDetails] = useInventoryDetails(inventoryId);
    return (
        <div>
        <div className="flex justify-center pb-10">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src= {inventoryDetails.picture}
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
                Quantity: {inventoryDetails.quantity}
              </h4>
              <div className='flex justify-center'>
                  <input type='number' className='bg-gray-50 borde border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-black block w-40 h-10 px-3 py-4 mt-4 font-bold' placeholder='put number' required/>
                  <br/>
                  <button 
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Update
              </button>
              </div>
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Supplier Name: {inventoryDetails.supplier_name}
              </h5>
            
            <button 
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default InventoryDetails;