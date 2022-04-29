import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-slate-400 px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-4xl text-emerald-700'>Illusion Wedding</Link>
            </div>
            <div className='flex gap-3 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/inventorypage'>Inventory</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
            </div>
            
        </div>
    );
};

export default Header;