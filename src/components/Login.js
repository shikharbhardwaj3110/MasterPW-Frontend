import React, { useState } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [auth, setAuth] = useState(true)
    async function authenticate() {
        setLoading(true)
        setAuth(true)
        const res = await axios.post('http://127.0.0.1:3001/auth', {
            username,
            password
        })
        setLoading(false)
        console.log(res)
        if (res.data.token) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username',res.data.username)
            window.location.href = 'http://localhost:3000/'
        }
        else {
            setAuth(false)
        }
    }

    return (
        <div class="logindiv">
            <div class="logindivinner d-flex justify-content-center align-items-center">
                <div class="loginform d-flex flex-column">
                    <div class="innerform container">
                        <div class="d-flex justify-content-center">
                            <h1 class="text-align-center" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Login</h1>
                        </div>
                        <div style={{ paddingTop: '3rem' }}>
                            <span style={{ color: 'gray', fontFamily: 'monospace' }}>Username</span>
                        </div>
                        <div style={{ marginTop: '0.8rem' }}>
                            <div class="forminputdiv" style={{ paddingBottom: '0.5rem' }}>
                                <i class="fas fa-user"></i>
                                <input placeholder="Type your username" class="forminput" value={username} onChange={(e) => { setUsername(e.target.value) }} style={{ width: '80%', paddingLeft: '15px' }}></input>
                            </div>
                        </div>
                        <div style={{ paddingTop: '1.5rem' }}>
                            <span style={{ color: 'gray', fontFamily: 'monospace' }}>Password</span>
                        </div>
                        <div style={{ marginTop: '0.8rem' }}>
                            <div class="forminputdiv" style={{ paddingBottom: '0.5rem' }}>
                                <i class="fas fa-key"></i>
                                <input placeholder="Type your password" class="forminput" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ width: '80%', paddingLeft: '15px' }}></input>
                            </div>
                        </div>
                        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                            <a style={{ fontFamily: 'inherit', color: 'gray', fontWeight: 'bold' }}>Forgot password ?</a>
                        </div>
                        <div style={{ marginTop: '2.5rem' }}>
                            <button class="formbutton w-100" onClick={authenticate} disabled={0}>Login</button>
                        </div>
                        {
                            auth ? null : <div style={{textAlign : 'center', border : '1px solid #e85f5f', borderRadius : '5px', marginTop : '2rem'}}><span style={{color : '#e85f5f', fontSize : '1rem'}}>You have entered incorrect credentials. Please try again.</span></div>
                        }
                        <div style={{marginTop : '2rem', textAlign : 'center'}}>
                            <ClipLoader loading={loading} size={30} color={"purple"} />
                        </div>
                        <div class="text-center bottomnavlink" style={{ marginTop: loading ? '4.5rem' : '4rem' }}>
                            <span style={{ color: 'gray' }}>Don't have an account ?</span>
                            <p>
                                <a href="/signup" style={{ fontWeight: 'bold', color: '#828282' }}>Sign up. </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
