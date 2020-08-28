import React, { useState, useEffect } from "react";

const ProfileInfo = (props) => {

    const [profile, setProfile] = useState({
        id: 1,
        username: '',
        password: '',
        phonenumber: ''
    });

    const handleChanges = e => {
        setProfile({...profile, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        setProfile(props.user);
    }, [profile]);

    return (
        <form>
            <h3>My Profile Info</h3>

            <div className="form-group">
                <label>Username</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Username"
                value={profile.username}
                onChange={handleChanges} />
            </div>

            <div className="form-group">
                <label>Phone</label>
                <input type="text" 
                className="form-control" 
                placeholder="Phone" 
                value={profile.phonenumber}
                onChange={handleChanges} />
            </div>


            <div className="form-group">
                <label>Password</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Enter password" 
                value={profile.password}
                onChange={handleChanges} />
            </div>
        </form>
    );
}

export default ProfileInfo;
