import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const StateCard = ({ state, deleteState }) => {
  

  const handleDeleteState = () => {
    fetch(`http://localhost:9393/states/${state.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => deleteState(state));
  }

  

  return (
    <div>
      <Link to={`/states/${state.id}/hikes`}>{ state.statename }
      </Link> - <button onClick={handleDeleteState}>Delete</button>
    </div>
  )
}

export default StateCard;
