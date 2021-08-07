import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from 'react'

function App() {

  if ((!(localStorage.getItem('token')))) {
    return (
      <div>
        <Login></Login>
      </div>
    )
  }

  return (
    <div>
      <Dashboard></Dashboard>

    </div>
  );
}

export default App;
