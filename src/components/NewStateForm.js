import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewStateForm = () => {
  const [ name, setName ] = useState("");

  const navigate = useNavigate();

  const handleChange = e => {
    setName({
      ...name,
      [e.target.stateName]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    const newState = {
      state_name: name.statename
    }

    fetch("http://localhost:9393/states", {
      method: "POST",
      headers: {
        "Content_Type": "application/json",
      },
      body: JSON.stringify(newState)
    })
    .then(() => navigate("/states"))
  }

  return (
    <div>
      <h1>New State</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="statename" value={ name.statename } autoFocus="true" onChange={handleChange}/>
        </div>

        <input type="submit" value={"Create State"}/>
        
      </form>
    </div>
  )
}

export default NewStateForm;