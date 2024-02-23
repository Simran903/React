import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../Context/MyContext'

function MyComponent() {
    const {text, setText} = useContext(MyContext)
  return (
    <div>
        <button onClick={() => setText("You have created me using MyContext")}>Click me</button>
        <h1>{text}</h1>
    </div>
  )
}

export default MyComponent