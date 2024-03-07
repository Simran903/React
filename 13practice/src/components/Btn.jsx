import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri';


const Btn = (props) => {
  return (
    <button className='flex gap-2 px-4 py-2 bg-red-700 text-white font-semibold'>
        {props.name}
        <div>
            <RiArrowRightLine className='w-5 h-6 font-semibold' />
        </div>
    </button>
  )
}

export default Btn