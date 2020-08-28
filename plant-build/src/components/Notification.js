// import React, { useContext, useState, useEffect } from 'react';
// import {PlantContext} from '../context/PlantContext';

// const Notification = () => {
//     const { frequency, setNotify } = useContext(PlantContext);
//     const {plant, setPlant} = useState({});

//     useEffect(() => {
//         const time = frequency[frequency.length-1].frequency * 1000;
//         const plant = frequency[frequency.length-1];
//         setNotify(true);
//         setTimeout(() => {
//             // alert(`${plant.nickname} is thirsty!`)
//             // setPlant(plant);
//             // console.log(plant);

//             setTimeout(() => {
//                 setNotify(false);
//             }, time + 10000);
//         }, time);
        
//     }, [frequency]);

//     return (
//         <div className='alert'>
//             <h1 className='header'>{plant.nickname} is thirsty!</h1>
//         </div>
//     );
// };

// export default Notification;