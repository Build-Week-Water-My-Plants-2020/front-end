import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {

    const [credentials, setCredentials] = useState(
        {email:'', password: ''}
    );
    const [error, setError] = useState(false);

    const handleChanges = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
        console.log('login.js: handleChanges:', e.target.value);
    };

    const loginSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            console.log('login.js: loginSubmit: axios.post: *success*', res);
            localStorage.setItem('authToken', res.data.payload);
            props.history.push('/protected');
            setError(false);
        })
        .catch(err => {
            console.error('login.js: loginSubmit: axios.post: *failure*', err);
            localStorage.removeItem('authToken');
            setError(true);
        });
    };

    return (
        <form onSubmit={loginSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input 
                name="email"
                type="text" 
                className="form-control" 
                placeholder="Enter email" 
                value={credentials.email}
                onChange={handleChanges}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                name='password'
                type="password" 
                className="form-control" 
                placeholder="Enter password" 
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
            {error ? <p className='error-login'>Wrong email or password - Try again.</p> : null}
        </form>
    );
}

export default Login;