import React, { Component } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default class SignUp extends Component {
    state = {
        credentials: {
            username: '',
            // email: '',
            password: '',
            phonenumber: ''
        },
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    signUpSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/auth/register', this.state.credentials)
        .then(res => {
            console.log('signup.js: loginSubmit: axios.post: *success*', res);
            localStorage.setItem('authToken', res.data.jwt);
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.error('signup.js: loginSubmit: axios.post: *failure*', err);
            localStorage.removeItem('authToken');
        });
    };

    render() {
        return (
            <form onSubmit={this.signUpSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                    name='username'
                    value={this.state.username}
                    type="text" 
                    className="form-control" 
                    placeholder="Enter username" />
                </div>

                {/* <div className="form-group">
                    <label>Email</label>
                    <input 
                    name='email'
                    value={this.state.email}
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    />
                </div> */}

                <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                    name='phoneNumber'
                    value={this.state.phonenumber}
                    type="text" 
                    className="form-control" 
                    placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password"
                    name='password'
                    value={this.state.password}
                    className="form-control" 
                    placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
