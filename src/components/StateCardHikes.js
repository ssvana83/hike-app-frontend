import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import HikeCard from './HikeCard';
import Hike from './Hike';

const StateCardHikes = ({ states }) => {
  const [hike, setHike] = useState([])
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
// const renderHikes = hikes.map(state => <StateCard key={state.id} state={state} hikes={state.hikes} />
// const renderHikes = hikes.map(hike => <HikeCard name={hike.name} />)
// const renderHikes = stateObject.hikes.filter((hike) => hike.state_id == id)

  
  return (
    <div>
      <h1>Create a new hike in this state below</h1>
      <form>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={hike.name} required /><br />
      <label htmlFor="length">Length (miles)</label>
      <input type="number" name="length" value={hike.length} required /><br />
      <label htmlFor="difficultyLevel">Difficulty Level</label>
      <input type="number" name="difficultyLevel" value={hike.difficultyLevel} required /><br />
      <label htmlFor="estimatedTime">Estimated Time (minutes)</label>
      <input type="number" name="estimatedTime" value={hike.estimatedTime} required /><br />
      <input type="submit" value="Create Hike" />

    </form>
      {/* <h3>Hikes in this state: <Link to={`/hikes/${finalHike.id}`}>{finalHike.name}</Link></h3> */}
      {/* {renderHikes} */}
    </div>
  )
}

export default StateCardHikes;

