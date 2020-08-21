import axios from 'axios';

export const axiosWithAuth = () => {
    console.log('localStorage', localStorage)
    const token = localStorage.getItem('authToken');
    return axios.create({
        baseURL: `http://localhost:5000/api`,
        headers: {
            Authorization: token
        }
    });
};

//this component initializes the token variable equal to the value of authToken 
//in the localStorage. This is the token retrieved if the login is successful.
//it is then set to the Authorization key in the axios request.
//for now, I have a fake baseURL that theorhetically shouldn't work.