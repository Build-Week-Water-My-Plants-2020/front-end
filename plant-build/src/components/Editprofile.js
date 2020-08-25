import React, { Component } from "react";

export default class Editprofile extends Component {
    render() {
        return (
            <form>
                <h3>Edit Profile</h3>

                <div className="form-group">
                    <label>New Username</label>
                    <input type="text" className="form-control" placeholder="Enter New Username" />
                </div>

                <div className="form-group">
                    <label>New Phone</label>
                    <input type="text" className="form-control" placeholder="Enter New Phone" />
                </div>


                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter New password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Edit Profile</button>
                <p className="forgot-password text-right">
                </p>
            </form>
        );
    }
}