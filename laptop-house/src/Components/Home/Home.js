import React from 'react';
import pic1 from '../../Images/pic1.jpg'
import useInventory from '../Hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [products] = useInventory();
    return (
        <main>
            <section className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-24'>
                <div className='h-full grid grid-cols-1 gap-20 md:grid-cols-2'>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-red-500 font-bold text-4xl'>Creates Beauty</h1>
                        <h1 className='text-red-500 font-bold text-4xl'>Like A Beast</h1>
                        <p className='text-xl font-medium'>The 8-core GPU in M1 Features superfast integrated graphics, delivering a ridiculous 5x boost in graphics horsepower.
                        </p>
                    </div>
                    <div className='flex aspect-w-3 aspect-h-2 order-1 md:order-2'>
                        <img className='mx-auto object-cover cover-img' src={pic1} alt=''></img>
                    </div>
                </div>
            </section>
             <section>
             <h1 className='text-center text-4xl font-sans font-bold text-cyan-700 pt-10 pb-10'>Products</h1>
             <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 pt-10 pb-10'>
                 {
                     products.slice(0,6).map(
                         (product, index) => <Inventory key={index} product={product}/>
                     )
                 }
             </div>
             </section>
        </main>
    );
};

export default Home;