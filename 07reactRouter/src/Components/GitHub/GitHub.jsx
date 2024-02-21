import React, { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/simran903')
    //   .then (response => response.json())
    //   .then (data => {
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-5 p-5 bg-gray-400 text-white text-3xl'>GitHub followers: {data.followers}
    <img src={data.avatar_url} alt='Git Picture' width={300}/>
    </div>
  )
}

export default GitHub

export const GithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/simran903')
    return response.json()
}