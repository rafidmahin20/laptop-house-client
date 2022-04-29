import React from 'react';

const NotFound = () => {
    return (
        <section className='mb-20'>
            <div className='px-4 py-32 mx-auto max-w-7xl pt-20 pb-20'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                <p className='mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase'>
                    Error 404
                </p>
                <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>Oops! The page you are looking for isn't here.</h1>
            </div>
            <div>
                <div className='w-full h-full bg-gray-200 rounded-lg'>
                    <img src='https://i.ibb.co/vYCgLw6/3733.jpg' alt=''></img>
                </div>
            </div>
        </div>
        </div>
        </section>
    );
};

export default NotFound;