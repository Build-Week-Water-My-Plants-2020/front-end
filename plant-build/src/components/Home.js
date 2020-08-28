import React from "react";
import { useHistory } from 'react-router-dom'

function Home(props) {
console.log('Home', props)

const history = useHistory();
return (
    <div className="home-wrapper">
    <img
        className="home-image"
        src="https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/11/house-plants-feature.jpg"
        alt=""
    />
    <button className="md-button shop-button" onClick={() => history.push("/Plantly")}>Explore!</button>
    </div>
);
}

export default Home;