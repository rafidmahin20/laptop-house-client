import { useEffect, useState } from 'react';

const useInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventorypage')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [products])
    return [products];
};

export default useInventory;