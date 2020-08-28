import React from "react";
import { Link } from 'react-router-dom'

// what do we need to add to this component so we can map through items?

function Shop(props) {
console.log(props);return (
    <div className="items-list-wrapper">

    {props.items.map(item => (
        <Link to={`/Plantly/${item.id}`}>
        <div className="item-card" key={item.id}>
            <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
            />
            <h2>{item.nickname}</h2>
            <h4>{item.description}</h4>
            <h2>{item.h20frequency}</h2>
            
        </div>
        </Link>
    ))}
    </div>
);
}

export default Shop;