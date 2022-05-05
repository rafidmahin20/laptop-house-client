import  { useEffect, useState } from 'react';

const useItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventorypage')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [items])
    return [items];
};

export default useItem;