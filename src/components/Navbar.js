import React from 'react'
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

const Navbar = () => {
    return (
        <div className='justify-between bg-blue-200'>
            <div className='flex justify-between px-10'>
                <div className='p-5 flex '>
                    <Link to="/">
                        <img src={LOGO_URL} alt='logo' />
                    </Link>
                    <Link to='/'><p className='px-8 cursor-pointer' >Home</p></Link>
                    <p className='px-2 cursor-pointer'>About Us</p>
                </div>
                <div className='flex gap-4 px-8'>
                    <button className='bg-gray-400 px-4 my-4 rounded-md'>Register</button>
                    <button className='bg-slate-400 px-4 my-4 rounded-md'>Login</button>
                </div>
            </div>
        </div >
    )
}

export default Navbar;