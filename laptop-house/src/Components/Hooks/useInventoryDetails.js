import { useEffect, useState } from 'react';

const useInventoryDetails = inventoryId => {
    const [inventoryDetails, setInventoryDetails] = useState({});
    useEffect(() =>{
        const url = `https://protected-sea-98781.herokuapp.com/inventorypage/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventoryDetails(data));
    }, [inventoryId])
    return [inventoryDetails, setInventoryDetails];
};

export default useInventoryDetails;