import React from 'react';
import {connect} from 'react-redux'
import {getUsers, fetchAllPlants, getPlant, getUsersPlants} from '../actions'

const ExampleGets = props => {

    console.log('plants',props.plants);
    console.log('plant',props.plant);
    console.log('users',props.users);

    return(
        <div>
            <p>test trials of get requests. (can see in console.log)</p>

            <button onClick={() => {
            props.getUsers()}}>get all users </button>
                
            <button onClick={() => {
            props.fetchAllPlants()}}>fetch all plants</button>

            <button onClick={() => {
                props.getPlant(1)
            }}>get plant by id</button>
            
            <button onClick={() => {
                props.getUsersPlants(1)
            }}>get user's plants</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        plants: state.plants,
        plant: state.plant,
        users: state.users
    }
}

export default connect(mapStateToProps, {
    getUsers, 
    fetchAllPlants, 
    getPlant,
    getUsersPlants})(ExampleGets)