import React, { useEffect, useContext } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import EditPlant from './EditPlant';
import AddPlant from './AddingPlant';
import {PlantContext} from '../context/PlantContext'
// import {UserContext} from '../context/UserContext'

const MyPlants = props => {
    const {allPlants, setAllPlants, edit, setEdit} = useContext(PlantContext);
    // const { setUserId } = useContext(UserContext);

    const getPlants = () => {
        axiosWithAuth()
        .get(`/plants`)
        .then(res => {
            console.log('getPlants *success*', res);
            setAllPlants(res.data);
          })
        .catch(err => {
          console.error('getPlants *error*', err)
        })
    };

    useEffect(() => {
        getPlants();
    }, []);

    const editingPlant = (plantId) => {
        const plantEdit = allPlants.filter(p => p.id === plantId)
        setEdit({...edit, isEditing: true, plant: plantEdit[0]});
    };

    return (
        <div>
            <EditPlant getPlants={getPlants} />
            <AddPlant getPlants={getPlants} />
            <div>
            {allPlants.length ? allPlants.map(plant => {
                return(
                    <div key={plant.id}>
                        <i className="fas fa-ellipsis-h" 
                            onClick={() => {
                                setEdit(true); 
                                editingPlant(plant.id);
                                // setUserId(plant.user_id);
                                }}></i>
                            <h1>{plant.nickname}</h1>
                            <p> Species: {plant.species}</p>
                            <p> Frequency: {plant.h2ofrequency}</p>
                    </div>
                )
            }) : null}
            </div>
        </div>
    );
};

export default MyPlants;