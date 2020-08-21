import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
        render = {() => {
            if (localStorage.getItem('authToken')) {
                return <Component />
            }
            console.log('auth failed! redirecting..')
            alert('you must log in to continue.')
            return <Redirect to='/sign-in' />
        }}/>
    );
};

export default PrivateRoute;

//this component is checking in the user's localStorage if there is a token
//if there is, it will route to the private component. If not, then it 
//will alert the user and redirect them to the sign-in page.