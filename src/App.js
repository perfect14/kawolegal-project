import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import Home from "./components/Home";
import Startup from "./components/Startup";
import Register from "./components/Register";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       <NavLink exact activeClassName="active" to ="/">Home</NavLink>
        <NavLink activeClassName="active" to ="/startup">Startup</NavLink>
        <NavLink activeClassName="active" to ="/register">Register</NavLink>
        <NavLink activeClassName="active" to ="/login">Login</NavLink>
        
        
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/startup" component={Startup}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
