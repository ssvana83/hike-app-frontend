import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"

const StateCard = ({ state }) => {

  const { id } = useParams();  
  const [stateObject, setStateObject] = useState({});


// dnt need this fetch since bringing in with state 
  // useEffect(() => {
  //   if (!state) {
  //     fetch(`http://localhost:9393/states/${id}`)
  //     .then(resp => resp.json())
  //     .then(state => setStateObject(state))
  //   }
  // }, [state, id]);

  const finalState = state ? state : stateObject
    
  
  return (
    <div>
      <h3>State Name: <Link to={`/states/${state.id}`}>{finalState.statename}</Link></h3>
      <h4>Town Name: {finalState.townname} </h4>
    </div>
  )
}

export default StateCard