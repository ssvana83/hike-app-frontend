import React, { useState } from 'react';
import { useParams} from 'react-router-dom';

const StateEdit = ({state, onUpdateState}) => {
  
  const [stateName, setStateName] = useState('');
  const {id} = useParams()

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9393/states/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ stateName })
    })
    .then((r) => r.json())
    .then(data => onUpdateState(data))
    // .then((updatedState) => {setStateName})
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          placeholder="Enter State Name"        
        />
      <button type="submit">Update this State</button>
      </form>
    </div>
  )


}

export default StateEdit;





