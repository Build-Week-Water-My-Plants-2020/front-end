import React, {useState, useEffect, useContext} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { PlantContext } from '../context/PlantContext';
// import { UserContext } from '../context/UserContext';

const EditPlant = props => {
    const {edit, setEdit} = useContext(PlantContext);
    const [editPlant, setEditPlant] = useState({
        id: 1,
        plantId: 1,
        nickname: 'nickname',
        species: 'species',
        h2ofrequency: 1
    });
    console.log('Edit Plant: ', editPlant);

    useEffect(() => {
       setEditPlant(edit.plant); 
    }, [edit]);

    const handleEditChanges = e => {
        setEditPlant({ ...editPlant, [e.target.name]: e.target.value});
    };

    const putPlants = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/plants/${edit.plant.id}`, editPlant)
        .then((res) => {
            console.log('putPlants *success*', res);
            setEditPlant(res.data);
            props.getPlants();
            setEdit({...edit, isEditing: false});
        })
        .catch(err => {
            console.error('putPlants *failure*',err);
            setEdit({...edit, isEditing: false});
        });
    };

    const deletePlant = () => {
        axiosWithAuth()
        .delete(`/plants/${edit.plant.id}`)
        .then((res) => {
            console.log('deletePlants *success*', res);
            setEditPlant(res.data);
            props.getPlants();
            setEdit({...edit, isEditing: false});
        })
        .catch(err => {
            console.error('deletePlants *failure*',err);
            setEdit({...edit, isEditing: false});
        });
    };

    return (
        <form onSubmit = {putPlants}>
                <h3>edit a plant</h3>
                <div>
                <label>Nickname</label>
                <input
                name='nickname'
                className='form-control'
                value={editPlant.nickname}
                onChange={handleEditChanges} 
                />
                </div>
                <div>
                <label>Species</label>
                <input
                name='species'
                className='form-control'
                value={editPlant.species}
                onChange={handleEditChanges} 
                />
                </div>
                <div>
                    <div>
                    <label>Watering frequency</label>
                    </div>
                <input
                type='number'
                name='h2ofrequency'
                className='form-control '
                id='watering'
                value={editPlant.h2ofrequency}
                onChange={handleEditChanges} 
                />
                <label className='inline-label'>times a week</label>
                </div>
                <button style={{marginTop: '10px'}}className="btn btn-primary btn-block" onClick={() => deletePlant()}>DELETE</button>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
    );
};

export default EditPlant;