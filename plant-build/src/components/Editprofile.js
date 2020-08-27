import React, { useState, useEffect } from "react";

 const Editprofile = props => {
     //edit profile has no functionality. 

    const [profile, setProfile] = useState({
        id: 1,
        username: '',
        password: '',
        phonenumber: ''
    });

    const handleChanges = e => {
        setProfile({...profile, [e.target.name]: e.target.value});
    }

        return (
            <form>
                <h3>Edit Profile</h3>

                <div className="form-group">
                    <label>New Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Username"
                    value={profile.username}
                    onChange={handleChanges} />
                </div>

                <div className="form-group">
                    <label>New Phone</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Phone" 
                    value={profile.phonenumber}
                    onChange={handleChanges} />
                </div>


                <div className="form-group">
                    <label>New Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" 
                    value={profile.password}
                    onChange={handleChanges} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Edit Profile</button>

        </form>

    );
};

export default Editprofile;
    