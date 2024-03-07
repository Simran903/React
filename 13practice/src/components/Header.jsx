import React from 'react'
import Btn from './Btn'

const Header = () => {
    return (
        <header className='flex justify-between'>
            <div className='px-5'>
                <img src="/images/brand_logo.png" alt="" />
            </div>
            <ul>
                <div className='flex space-x-9 font-bold text-gray-700'>
                    <li className='hover:text-red-700 cursor-pointer'>MENU</li>
                    <li className='hover:text-red-700 cursor-pointer'>LOCATION</li>
                    <li className='hover:text-red-700 cursor-pointer'>ABOUT</li>
                    <li className='hover:text-red-700 cursor-pointer'>CONTACT</li>
                </div>
            </ul>
            <div className='pr-5'>
            <Btn name="Login"/>
            </div>
        </header>
    )
}

export default Header