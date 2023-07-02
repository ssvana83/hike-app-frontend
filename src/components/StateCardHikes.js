import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HikeCard from './HikeCard';

const StateCardHikes = ({ states }) => {
  const { id } = useParams();
  const [stateObject, setStateObject] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9393/states/${id}/hikes`)
      .then(resp => resp.json())
      .then(states => setStateObject(states))
  }, [states, id]);

  const finalHike = states ? states : stateObject

  console.log(states[id])
  console.log(id)

  // const hikeCard = stateObject.hikes.map((hike, index) => <HikeCard key={ index } hike={ hike } states={ states } />)

  
  return (
    <div>
      <h3>Hikes in this state: <Link to={`/hikes/${finalHike.id}`}>{finalHike.name}</Link></h3>
      
    </div>
  )
}

export default StateCardHikes;

