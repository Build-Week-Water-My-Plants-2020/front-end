import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('authToken');
    console.log('localStorage', localStorage)
    return axios.create({
        baseURL: `https://watermyplants2020.herokuapp.com/api/`,
        headers: {
            Authorization: `${token}`
        }
    });
};

//this component initializes the token variable equal to the value of authToken 
//in the localStorage. This is the token retrieved if the login is successful.
//it is then set to the Authorization key in the axios request.
//for now, I have a fake baseURL that theorhetically shouldn't work.