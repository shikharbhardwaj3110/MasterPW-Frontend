import React, { useState } from 'react'
import axios from 'axios'

function Dashboard() {

    async function logout() {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button class="btn btn-danger" onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard;
