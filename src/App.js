import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  if((window.location.pathname == '/login' || window.location.pathname == '/signup') && localStorage.getItem('token')) {
    window.location.href = 'http://localhost:3000/'
  }

  if ((!(localStorage.getItem('token')))) {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Landing}></Route>
          </Switch>
      </Router>
    )
  }

  return (
    <div>
      <Dashboard></Dashboard>

    </div>
  );
}

export default App;
