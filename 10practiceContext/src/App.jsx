import { useState } from 'react'
import './App.css'
import { MyContext } from './Context/MyContext'
import MyComponent from './Components/MyComponent'

function App() {
  const [text, setText] = useState("")

  return (
    <MyContext.Provider value={{text, setText}}>
      <div>
        <MyComponent />
      </div>
    </MyContext.Provider>
  )
}

export default App
