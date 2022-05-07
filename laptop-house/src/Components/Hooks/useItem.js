import  { useEffect, useState } from 'react';

const useItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://protected-sea-98781.herokuapp.com/inventorypage')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [items])
    return [items];
};

export default useItem;