import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import Hike from './Hike';

const StateCard = ({ state, deleteState }) => {
  
  return (
    <div>
      
       <Link to={`/states/${state.id}/hikes`}>{ state.statename }</Link> - <button onClick={ () => deleteState(state.id) }>Delete</button>
    </div>
  )
}

export default StateCard;