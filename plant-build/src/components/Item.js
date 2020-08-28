import React from "react";
import { Route, Link, NavLink,useParams, useRouteMatch } from 'react-router-dom'
//import ItemDescription from './ItemDescription'
import ItemShipping from './ItemTest'

function Item(props) {

  const params = useParams();
  console.log(params)

  const routeMatch = useRouteMatch();
  console.log(routeMatch)



  const shopItem = props.items.find(item => item.id === Number(params.banana))
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
      
        <NavLink exact to={routeMatch.url}>
          Description
        </NavLink>
        <NavLink to={`${routeMatch.url}/shipping`}>Shipping</NavLink>
      </nav>
      
      <Route exact path={routeMatch.path}>
        
      </Route>
      
      
      <Route path={`${routeMatch.path}/shipping`}>
        <ItemShipping item={shopItem}/>
      </Route>
    </div>
  );
}
export default Item;