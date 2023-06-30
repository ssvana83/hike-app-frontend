import React from 'react'
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const StateCardHikes = ({ states }) => {
  const { id } = useParams();
  const [hikeObject, setHikeObject] = useState({});

  // const finalHike = hike ? hike: hikeObject


  console.log(states[id])
  console.log(id)

  // const hikeCards = state.hikes.map((hike, index) => <HikeCard key={index} hike={hike} state={state}></HikeCard>)
  
  
  return (
    <div>
      {/* <ul>
        <li>I am the Hikes</li>
      </ul> */}
      {/* <h3>Hikes in this state: <Link to={`/hikes/${finalHike.id}`}>{finalHike.name}</Link> </h3> */}

    </div>
  )
}

export default StateCardHikes;