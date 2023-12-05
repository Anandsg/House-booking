import React from 'react'

const Navbar = () => {
    return (
        <div className='justify-between bg-blue-200'>
            <div className='flex justify-between px-10'>
                <div className='p-5'>
                    <img src='https://www.nestaway.com/_flash_app/immutable/assets/nestawayIcon.ad7b1cdf.svg' alt='logo' />
                </div>
                <div className='flex gap-4 px-8'>
                    <button className='bg-slate-400 px-4 my-4 rounded-lg'>Register</button>
                    <button className='bg-slate-400 px-4 my-4 rounded-lg'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;