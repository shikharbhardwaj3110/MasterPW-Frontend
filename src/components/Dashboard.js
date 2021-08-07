import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Dashboard() {

    async function logout() {
        localStorage.removeItem('token')
        window.location.href = 'http://localhost:3000/'
    }

    return (
        <div>
            <h1>Dashboard</h1>
           
                <button class="btn btn-danger" onClick={logout}>Logout</button>
            
        </div>
    )
}

export default Dashboard;
