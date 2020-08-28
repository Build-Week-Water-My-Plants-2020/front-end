import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SignUp = props => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        phonenumber: ""
    });

    const handleChanges = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value});
        // console.log("e.target.value", e.target.value)
    };

    const signUpSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/auth/register", credentials)
        .then((res) => {
            console.log("signup *success*", res);
            localStorage.setItem("authToken", res.data.token);
            console.log('signUp localStorage',localStorage)
            props.history.push("/login");
        })
        .catch((err) => {
            console.log("signup *failure*", err)
            localStorage.removeItem("authToken");
        });
    };
 
        return (
            <div className="login">
               <form onSubmit={signUpSubmit}>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input 
                        name="username"
                        type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        value={credentials.username}
                        onChange={handleChanges}/>
                    </div>

                    <div className="form-group">
                        <label>Phone number</label>
                        <input 
                        name="phonenumber"
                        type="text" 
                        className="form-control" 
                        placeholder="Phone number" 
                        value={credentials.phonenumber}
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

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    
                </form> 
               
            </div>
        )   
}

export default SignUp;
