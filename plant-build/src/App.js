import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signUp";
import Editprofile from "./components/Editprofile";
import ItemAdd from "./components/ItemAdd";
import Profile from "./components/Plants";
import MyPlants from "./components/MyPlants";
import Notification from './components/Notification';

import PrivateRoute from './utils/PrivateRoute';
import {PlantContext} from './context/PlantContext';
import {UserContext} from './context/UserContext';

import Data from './components/Data';
import NoteForm from "./components/AddPlantForm";
import Notes from "./components/AddPlant";


function App () {

  const [allPlants, setAllPlants] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState({isEditing: false, plant: {}});
  const [frequency, setFrequency] = useState([]);
  const [notify, setNotify] = useState(false);

  const logout = () => {
    localStorage.clear();
    console.log('user logged out');
  };

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
  
  return (
    <PlantContext.Provider value={{
      allPlants, setAllPlants,
      edit, setEdit,
      frequency, setFrequency,
      notify, setNotify
    }}>
    <UserContext.Provider value={{
      user, setUser,
      error, setError,
    }}> 
    <Router>
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
                <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} onClick={logout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login}/>
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

        {/* {notify && <Notification/>} */}

        <nav className="profile">
          <div className="container1">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Editprofile"}>Edit Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/myprofile"}>My Plant</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/my-profile"}>My Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/profile"}>Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/MyPlants"}>My Plants</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper1">
          <div className="auth-inner1">
            <Switch>
              <PrivateRoute exact path='/my-profile' user={user} component={Profile} />
              <PrivateRoute exact path="/Editprofile" component={Editprofile} />
              <PrivateRoute exact path="/MyPlants" user={user} component={MyPlants} />
              <PrivateRoute exact path='/myprofile' component={addNewNote} />
              <Route path="/Profile" component={ItemAdd} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    </UserContext.Provider>
    </PlantContext.Provider>
  );

}

export default App;