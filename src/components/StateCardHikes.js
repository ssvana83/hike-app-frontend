import React from 'react'
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const StateCardHikes = ({ hike }) => {
  const { id } = useParams();
  const [hikeObject, setHikeObject] = useState({});

  const finalHike = hike ? hike: hikeObject
  return (
    <div>
      {/* <ul>
        <li>I am the Hikes</li>
      </ul> */}
      <h3>Hikes in this state: <Link to={`/hikes/${finalHike.id}`}>{finalHike.name}</Link> </h3>

    </div>
  )
}

export default StateCardHikes;