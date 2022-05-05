import React from 'react';

const AddInventory = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='shadow-lg m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96 rounded border border-zinc-400'>
            <h2 className='text-3xl text-center font-bold mb-6'>Add Item</h2>
            <form>
                <div className='mx-auto w-80 mb-5'>
                    <input type='email' name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder='Email' />
                </div>
                <div className='mx-auto w-80 mb-5'>
                    <input type='text' name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder='Name' />
                </div>
                <div className='mx-auto w-80 mb-5'>
                    <input type='text' name="picture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder='Picture Url' />
                </div>
                <div className='mx-auto w-80 mb-5'>
                    <textarea type='text' name="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder='Details' required />
                </div>
                <div className='mx-auto w-80 mb-5'>
                    <input type='number' name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder='Price' required />
                </div>
                <div className='mx-auto w-80 mb-5'>
                    <input type='number' name="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder='Quantity' required />
                </div>
                <div className='mx-auto w-80 mb-5'>
                    <input type='text' name="supplier_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder='Supplier Name' required />
                </div>
                <div className='flex justify-center'>
                    <input type='submit' className="text-white bg-blue-700 font-medium rounded-lg text-sm px-32 py-2.5 text-center mb-3" value="Add" />
                    </div>
            </form>
            </div>
        </div>
    );
};

export default AddInventory;