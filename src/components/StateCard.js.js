import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const StateCard = ({ state, onDeleteState }) => {
  

  function handleDeleteState() {
    fetch(`http://localhost:4000/state/${state.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteState(state));
  }

  

  return (
    <div>
      <Link to={`/states/${state.id}/hikes`}>{ state.statename }
      </Link> - <button onClick={ () => onDeleteState(state.id) }>Delete</button>
    </div>
  )
}

export default StateCard;
