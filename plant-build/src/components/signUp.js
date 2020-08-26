import React, { Component } from "react";
import { connect } from 'react-redux';
import { postRegister } from  '../actions'

class SignUp extends Component {
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
        this.props.postRegister(this.state.credentials)
        .then(res => {
            this.props.history.push('/myprofile');
            this.setState({credentials: {username:'', password:'', phonenumber:''}})
        })
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
                    placeholder="Username" />
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
                    <label>Phone</label>
                    <input 
                    name='phoneNumber'
                    value={this.state.phonenumber}
                    type="text" 
                    className="form-control" 
                    placeholder="Phone" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password"
                    name='password'
                    value={this.state.password}
                    className="form-control" 
                    placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}


export default connect(null, {postRegister})(SignUp)
