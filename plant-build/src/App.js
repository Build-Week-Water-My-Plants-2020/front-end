import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signUp";
import Editprofile from "./components/Editprofile";
import ItemAdd from "./components/ItemAdd";
import Profile from "./components/Plants";

import PrivateRoute from './utils/PrivateRoute';



function App() {

  

  
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>WATER MY PLANTS</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>



      <nav className="profile">
        <div className="container1">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Editprofile"}>Edit Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/myprofile"}>My Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profile"}>Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper1">
        <div className="auth-inner1">
          <Switch>
            <Route exact path='/myprofile' component={Profile} />
            <Route path="/Profile" component={ItemAdd} />
            <Route path="/Editprofile" component={Editprofile} />
          </Switch>
        </div>
      </div>







    </div>
    </Router>
  );

}

export default App;