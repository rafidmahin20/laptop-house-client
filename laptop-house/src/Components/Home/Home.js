import React from "react";
import pic1 from "../../Images/pic1.jpg";
import useInventory from "../Hooks/useInventory";
import Inventory from "../Inventory/Inventory";
import './Home.css'

const Home = () => {
  const [products] = useInventory();
  return (
    <main>
      <section className="px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-24">
        <div className="h-full grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="text-red-500 font-bold text-4xl">Creates Beauty</h1>
            <h1 className="text-red-500 font-bold text-4xl">Like A Beast</h1>
            <p className="text-xl font-medium">
              The 8-core GPU in M1 Features superfast integrated graphics,
              delivering a ridiculous 5x boost in graphics horsepower.
            </p>
          </div>
          <div className="flex aspect-w-3 aspect-h-2 order-1 md:order-2">
            <img
              className="mx-auto object-cover cover-img"
              src={pic1}
              alt=""
            ></img>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center text-4xl font-sans font-bold text-cyan-700 pt-10 pb-10">
          Products
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 pt-10 pb-10">
          {products.slice(0, 6).map((product, index) => (
            <Inventory key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Manage Inventory
          </button>
        </div>
      </section>
        <section className="overflow-hidden text-gray-700 mt-10">
        <h1 className="text-center text-4xl font-sans font-bold text-cyan-700 pt-10 pb-10">
          Gallery
        </h1>
          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://i.ibb.co/B204nTf/ivan-bandura-l-ZCHy8-PLyyo-unsplash.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://i.ibb.co/87zZfXs/daniel-romero-w-VG03-Lw-M86s-unsplash.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://i.ibb.co/52YzFHd/banner.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://i.ibb.co/9qq0C9S/blvck-paris-0f-O7-J6-PGW84-unsplash.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://i.ibb.co/4gqs38Z/simon-hrozian-P7-KF3c-TRKc-E-unsplash.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://i.ibb.co/ZLXj2tX/peng-original-L3-N257-Vedu-Q-unsplash.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20">
        <div className='mb-56'>
            <div className='home-img'>
                <h5 className='text-3xl text-center pt-40 font-bold text-white'>The Best Experiences Only On Apple</h5>
                <div className='flex items-center w-96 mx-auto mt-4'>
                    <div className='relative w-full'>
                        <input type='text' id='simple-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5' placeholder=''/>
                    </div>
                    <button type='submit' className='py-2.5 px-7 mt-5 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 rounded-r-md'>Search</button>
                </div>
            </div>
        </div>
        </section>
    </main>
  );
};

export default Home;
