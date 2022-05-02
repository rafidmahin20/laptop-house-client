import React from "react";
import { useNavigate } from "react-router-dom";

const ManageInventory = () => {
    const navigate = useNavigate();
    const navigateToAddInventories = () =>{
        navigate('/addinventories');
    }
  return (
    <main>
      <div className="flex justify-center mt-10">
        <button onClick={navigateToAddInventories}
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add New Items
        </button>
      </div>
    </main>
  );
};

export default ManageInventory;
