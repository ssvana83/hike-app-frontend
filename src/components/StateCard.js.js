import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import StateEdit from "./StateEdit";

const StateCard = ({ state, deleteState, onUpdateState }) => {
// added now 1A
  const[updatedStateName, setUpdatedStateName] = useState("");
  const[editing, setEditing] = useState(false);
  

  const handleDeleteState = () => {
    fetch(`http://localhost:9393/states/${state.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => deleteState(state));
  }

  // added now 1A
  const handleUpdateState= (e) => {
    e.preventDefault();
    fetch(`http://localhost:9393/states/${state.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        statename: updatedStateName
      }),
    })
      .then((r) => r.json())
      .then((newState) => {onUpdateState(newState);
      });
  }

  function handleEdit() {
    setEditing(!editing)
  }


  return (
    <div>
      <Link to={`/states/${state.id}/hikes`}>{ state.statename } </Link>  
      
      {/* <StateEdit onUpdateState={onUpdateState}/> */}
      <button onClick={handleDeleteState}>Delete State</button>  
      <button onClick={handleEdit}>{!editing? "Edit" : "Close"}</button>
        {editing?(
          <div>
            <form onSubmit={handleUpdateState}>
              <input
                type="text"
                placeholder="State Name"
                value={updatedStateName}
                onChange={(e) => setUpdatedStateName(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          </div>
        ) : (null)
      }
          
    </div>
  )
}

export default StateCard;
