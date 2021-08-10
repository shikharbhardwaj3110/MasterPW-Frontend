import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Stats from './Stats'
import Passwords from './Passwords'

function Dashboard() {
    async function logout() {
        localStorage.removeItem('token')
        window.location.href = 'http://localhost:3000/'
    }

    const [passwords, setPasswords] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/getPasswords/sort/1', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(result => {
            console.log(result.data)
            setPasswords(result.data)
        });
    }, [])

    return (
        <div class="bg-light">
            <nav class="navbar-main text-light bg-color-frost">
                <div class="navdiv d-flex">
                    <div>
                        <a style={{ fontSize: '1.2rem' }}>
                            <i class="fas fa-key" style={{ paddingRight: "8px" }}></i>
                            MasterPW
                        </a>
                    </div>

                    <div class="buttonsdiv">
                        <div class="dropdown d-inline d-md-none dropdowndiv">
                            <button class="btn text-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="/login" onClick={logout}>Logout</a></li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn btn-danger btn-sm d-none d-md-inline" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>

        <Stats></Stats>
        <Passwords props={passwords}></Passwords>
        </div>
    )
}

export default Dashboard;
