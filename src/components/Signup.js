import React, { useState } from 'react'
import axios from 'axios'

function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function register() {
        const res = await axios.post('http://127.0.0.1:3001/createUser', {
            username,
            email, 
            password
        })
        console.log(res)
        if (res.data.token) {
            //console.log(res)
            localStorage.setItem('token', res.data.token) 
            window.location.href = 'http://localhost:3000/'
        }
    }

    return (
        <div class="logindiv">
        <div class="logindivinner d-flex justify-content-center align-items-center">
            <div class="loginform d-flex flex-column">
                <div class="innerform">
                    <div class="d-flex justify-content-center">
                        <h1 class="text-align-center" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Signup</h1>
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
                        <span style={{ color: 'gray', fontFamily: 'monospace' }}>Email</span>
                    </div>
                    <div style={{ marginTop: '0.8rem' }}>
                        <div class="forminputdiv" style={{ paddingBottom: '0.5rem' }}>
                            <i class="fas fa-envelope"></i>
                            <input placeholder="Type your email" class="forminput" value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ width: '80%', paddingLeft: '15px' }}></input>
                        </div>
                    </div>


                    <div style={{ paddingTop: '1.5rem' }}>
                        <span style={{ color: 'gray', fontFamily: 'monospace' }}>Password</span>
                    </div>
                    <div style={{ marginTop: '0.8rem' }}>
                        <div class="forminputdiv" style={{ paddingBottom: '0.5rem' }}>
                            <i class="fas fa-key"></i>
                            <input placeholder="Type your password" class="forminput" value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ width: '80%', paddingLeft: '15px' }}></input>
                        </div>
                    </div>
                    
                    <div style={{marginTop : '2.5rem'}}>
                        <button class="formbutton w-100">Sign up</button>
                    </div>
                    <div class="text-center" style={{marginTop : '5rem'}}>
                        <span style={{color : 'gray'}}>Already have an account ?</span>
                        <p>
                            <a href="/login" style={{fontWeight : 'bold', color : '#828282'}}>Log in. </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup;
