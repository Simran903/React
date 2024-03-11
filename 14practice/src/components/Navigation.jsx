import React from 'react'

const Navigation = () => {
    return (
        <nav className='flex justify-between'>
            <div>
                <img src="images/logo.png" alt="logo" className='pl-4' />
            </div>
            <ul className='flex space-x-8 font-bold text-gray-700 pr-16 text-lg'>
                <li className='cursor-pointer hover:text-black'>Home</li>
                <li className='cursor-pointer hover:text-black'>About</li>
                <li className='cursor-pointer hover:text-black'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation