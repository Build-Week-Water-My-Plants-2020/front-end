import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Login = props => {
    const [credentials, setCredentials] = useState({
        id: 1,
        username: "",
        password: "",
        phonenumber: ""
    });

    // const [userId, setUserId] = useState(123);
    const [error, setError] = useState(false);

    const handleChanges = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value});
    };

    const loginSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/auth/login", credentials)
        .then((res) => {
            localStorage.setItem("authToken", res.data.jwt);
            setError(false);
            setCredentials({...credentials, id: res.data.user.id, phonenumber: res.data.user.phonenumber});
            props.setUser(credentials);
            console.log('login localStorage', localStorage);
            props.history.push("/myprofile");
            console.log('user info', credentials);
            console.log("loginSubmit *success*", res);
        })
        .catch((err) => {
            localStorage.removeItem("authToken");
            setError(true);
            console.log("loginSubmit *failure*", err);
        });
    };
 
 
        return (
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

        )
}

export default Login;