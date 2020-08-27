import React, {useState} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddPlant = props => {
    const [addPlant, setAddPlant] = useState({
        user_id: 1,
        nickname: '',
        species: '',
        h2ofrequency: ''
    });
    const handleAddChanges = e => {
        setAddPlant({ ...addPlant, [e.target.name]: e.target.value});
    };
    const postPlant = (add) => {
        axiosWithAuth()
        .post(`/plants/${addPlant.user_id}`, add)
        .then(res => {
            console.log('postPlant *success*', res);
            props.getPlants();
        })
        .catch(err => 
            console.log('postPlant *failure*', err))
    }
    const postSubmitHandler = e => {
        e.preventDefault();
        postPlant(addPlant);
    }

    return (
        <form onSubmit = {postSubmitHandler}>
            <h3>add a plant</h3>
            <div>
            <label>Nickname</label>
            <input
            name='nickname'
            className='form-control'
            value={addPlant.nickname}
            onChange={handleAddChanges} 
            />
            </div>
            <div>
            <label>Species</label>
            <input
            name='species'
            className='form-control'
            value={addPlant.species}
            onChange={handleAddChanges} 
            />
            </div>
            <div>
            <div>
                    <label>Watering frequency</label>
                    </div>
            <input
            name='h2ofrequency'
            type='number'
            id='watering'
            className='form-control'
            value={addPlant.h2ofrequency}
            onChange={handleAddChanges} 
            />
            <label className='inline-label'>times a week</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        
        </form>
    );
};

export default AddPlant;
