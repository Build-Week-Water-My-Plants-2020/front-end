import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signUp";
import Editprofile from "./components/Editprofile";
import ItemAdd from "./components/ItemAdd";
import Profile from "./components/Plants";

import PrivateRoute from './utils/PrivateRoute';
import ExampleGets from './components/ExampleGets'
import Data from './components/Data'
import NoteForm from "./components/AddPlantForm";
import Notes from "./components/AddPlant";


function App() {

  const [notes, setNotes] = useState([
    {
      nickname: 1,
      Species: "Bogenvilla",
      h2ofrequency:
        "This is the H20 Frequency"
    }
  ]);


  const addNewNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body
    };
    setNotes([...notes, newNote]);
  };




  const [notes1, setNotes1] = useState([
    {
      nickname: '',
      Species: '',
      h2ofrequency: ''
    }
  ]);



  
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



      <div className="auth-wrapper2">
        <div className="auth-inner2">
        <h1>My Plants</h1>
      <NoteForm addNewNote={addNewNote} title="Default title" />
      <Notes notes={notes} />
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
            <PrivateRoute exact path='/myprofile' component={addNewNote} />
            <Route path="/Profile" component={ItemAdd} />
            <Route path="/Editprofile" component={Editprofile} />
          </Switch>
        </div>
      </div>

      
      <ExampleGets/>





    </div>
    </Router>
  );

}

export default App;