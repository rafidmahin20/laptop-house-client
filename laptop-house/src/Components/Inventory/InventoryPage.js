import React from 'react';
import useInventory from '../Hooks/useInventory';
import Inventory from './Inventory';

const InventoryPage = () => {
    const [products] = useInventory()
    return (
        <div>
             <h1 className='text-center text-4xl font-sans fony-bold text-cyan-700 pb-20 pt-10'>Welcome to Apple ecosystem</h1>
             <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-10'>
                 {
                     products.map(product => <Inventory product = {product}/>)
                 }
             </div>
        </div>
    );
};

export default InventoryPage;