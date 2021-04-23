import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component.js";
import Home from './components/home.component.js';
import Profile from './components/profile.component.js';


function App() {
  return (
    <Router>
    <div className="App">          
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />            
            <Route path="/home" component={Home} />            
            <Route path="/profile" component={Profile} />            
          </Switch>
    </div>      
    </Router>
  );
}

export default App;

