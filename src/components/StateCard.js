import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"

const StateCard = ({ state, hikes }) => {
  const [stateObject, setStateObject] = useState({});
  const finalState = state ? state : stateObject
    
  
  return (
    <div>
      {/* <h3>State Name: <Link to={`/states/${finalState.id}`}>{finalState.statename}</Link></h3>
       */}
       <h3>State Name: <Link to={`/states/${finalState.id}/hikes`}>{finalState.statename}</Link></h3>

      {/* <h2>Hike Name: {finalState.hikes.name} </h2> */}
      {/* <h4>Town Name: {finalState.townname} </h4> */}
    </div>
  )
}

export default StateCard