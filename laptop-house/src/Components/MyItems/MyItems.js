import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init'
import useItem from '../Hooks/useItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate =useNavigate();
    const [items, setItems] = useItem();
    useEffect(() => {
        const url = `https://protected-sea-98781.herokuapp.com/inventorypage?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [myItems, user]);

    const handleDelete = id =>{
        const proceed = window.confirm('You Sure?');
        if(proceed){
          const url = `https://protected-sea-98781.herokuapp.com/inventorypage/${id}`;
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
        <div>
            <h1>hello items</h1>
        </div>
    );
};

export default MyItems;