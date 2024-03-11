import React from 'react'

const Btn = ({title, icon}) => {
  return (
    <button className='bg-black text-white p-2 px-8 flex gap-2 italic font-semibold'>
        {icon}
        {title}
    </button>
  )
}

export default Btn