import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password, gender})
    }
  return (
    <div>
        <h2>Login</h2>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username'/>
        {"    "}
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password'/>
        {"    "}
        <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder='Gender'/>
        {"    "}
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login