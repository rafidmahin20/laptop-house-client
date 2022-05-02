import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <div className='sticky top-0 px-12 py-8 flex justify-center md:justify-between bg-red-300'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-4xl text-emerald-700'>Apple Ecosystem</Link>
            </div>
            <div className='flex gap-3 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/inventorypage'>Inventory</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/aboutus'>About Us</CustomLink>
                {
                    user && <>
                    <CustomLink as={Link} to='/addinventories' >Add Items</CustomLink>
                    <CustomLink as={Link} to='/manageinventories' >Manage Items</CustomLink>
                    <CustomLink as={Link} to='/myitems' >My Items</CustomLink>
                    </>
                }
                {
                user ?
                    <button onClick={handleLogout} className='font-semibold text-amber-600 '>Logout</button>
                    :
                    <CustomLink as={Link} to='/login'>Login</CustomLink>
                }
            </div>
            
        </div>
    );
};

export default Header;