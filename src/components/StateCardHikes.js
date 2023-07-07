import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import HikeCard from './HikeCard';
import Hike from './Hike';

const StateCardHikes = ({ states }) => {
  const { id } = useParams();


  const [stateObject, setStateObject] = useState({});
  useEffect(() => {
    fetch(`http://localhost:9393/hikes`)
      .then(resp => resp.json())
      .then(states => setStateObject(states))
  }, states);

  // const finalHike = states ? states : stateObject


console.log(stateObject)


  // const hikeCard = stateObject.hikes.map((hike, index) => <HikeCard key={ index } hike={ hike } states={ states } />)
// const renderStateHikes = ()
// const hikes = stateObject.map(hike => hike.state_id <= id)
// const renderHikes = hikes.map(state => <StateCard key={state.id} state={state} hikes={state.hikes} />)

// console.log(typeof hikes)
// const renderHikes = hikes.map(hike => <HikeCard name={hike.name} />)
// const renderHikes = stateObject.hikes.filter((hike) => hike.state_id == id)
// console.log(renderHikes)
  
  return (
    <div>
      {/* <h3>Hikes in this state: <Link to={`/hikes/${finalHike.id}`}>{finalHike.name}</Link></h3> */}
      {/* {renderHikes} */}
    </div>
  )
}

export default StateCardHikes;

