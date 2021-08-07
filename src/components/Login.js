import React, { useState } from 'react'
import axios from 'axios'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function authenticate() {
        const res = await axios.post('http://127.0.0.1:3001/auth', {
            username,
            password
        })
        console.log(res)
        if (res.data.token) {
            localStorage.setItem('token', res.data.token) 
            window.location.href = 'http://localhost:3000/'
        }
    }

    return (
        <div>
            <input placeholder="Email/Username" value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
            <input placeholder="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
            <button onClick={authenticate}>Submit</button>
        </div>
    )
}

export default Login;
