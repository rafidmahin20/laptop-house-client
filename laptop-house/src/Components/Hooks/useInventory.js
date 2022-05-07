import { useEffect, useState } from 'react';

const useInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://protected-sea-98781.herokuapp.com/inventorypage')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [products])
    return [products];
};

export default useInventory;