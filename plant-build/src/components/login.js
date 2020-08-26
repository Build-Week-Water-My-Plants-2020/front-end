import React, { useState } from "react";
import { connect } from 'react-redux';
import { postLogin, getUsers, fetchAllPlants } from '../actions'

const Login = props => {

    const [credentials, setCredentials] = useState(
        {username:'', password: ''}
    );
    const [error, setError] = useState(false);

    const handleChanges = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
        // console.log('login.js: handleChanges:', e.target.value);
    };

    const loginSubmit = e => {
        e.preventDefault();
        props.postLogin(credentials)
        .then(res => {
            localStorage.setItem('authToken', res.data.token);
            props.history.push('/myprofile');
            setError(false);
            setCredentials({username:'', password:''})
        })
        .catch(err => {
            localStorage.removeItem('authToken');
            setError(true);
        });
    };

    return (
        <div>
        <form onSubmit={loginSubmit}>
            <h3>LogIn</h3>

            <div className="form-group">
                <label>Username</label>
                <input 
                name="username"
                type="text" 
                className="form-control" 
                placeholder="Enter Username" 
                value={credentials.username}
                onChange={handleChanges}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                name='password'
                type="password" 
                className="form-control" 
                placeholder="Password" 
                value={credentials.password}
                onChange={handleChanges}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            {error ? <p className='error-login'>Wrong Username or password - Please Try again.</p> : null}
        </form>

        </div>
    );
}

export default connect(null, {postLogin, getUsers, fetchAllPlants})(Login)