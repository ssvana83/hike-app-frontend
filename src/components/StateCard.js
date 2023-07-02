import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Hike from './Hike';

const StateCard = ({ state, deleteState, hikes }) => {
  
  
  return (
    <div>
      {/* <h3>State Name: <Link to={`/states/${finalState.id}`}>{finalState.statename}</Link></h3>
       */}
       {/* <h3>State Name: <Link to={`/states/${finalState.id}/hikes`}>{finalState.statename}</Link></h3> */}
       <Link to={`/states/${state.id}/hikes`}>{ state.statename }</Link> - <button onClick={ () => deleteState(state.id) }>Delete</button>
       {/* <Hike hikes={state.hikes}/> */}
    </div>
  )
}

export default StateCard