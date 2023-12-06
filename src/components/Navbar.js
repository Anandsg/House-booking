import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

const Navbar = () => {
    return (
        <div className='bg-blue-200'>
            <div className='flex justify-between md:px-10 px-4'>
                <div className='md:p-5 p-3 flex'>
                    <Link to="/">
                        <img src={LOGO_URL} alt='logo' />
                    </Link>
                    <Link to='/'>
                        <p className='md:px-8 px-4 cursor-pointer'>Home</p>
                    </Link>
                    <p className='px-2 cursor-pointer'>About Us</p>
                </div>
                <div className='flex gap-4 px-8'>
                    <button
                        className='bg-gray-400 px-4 my-4 rounded-md hidden md:inline-block hover:bg-gray-500 focus:outline-none focus:ring'
                    >
                        Register
                    </button>
                    <button
                        className='bg-slate-400 px-4 my-4 rounded-md hidden md:inline-block hover:bg-gray-500 focus:outline-none focus:ring'
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
