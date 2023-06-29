import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"

const StateCard = ({ state, hikes }) => {

  // const { id } = useParams();  
  const [stateObject, setStateObject] = useState({});


// dont need this fetch since bringing in with state 
  // useEffect(() => {
  //   if (!state) {
  //     fetch(`http://localhost:9393/states/${id}`)
  //     .then(resp => resp.json())
  //     .then(state => setStateObject(state))
  //   }
  // }, [state, id]);

  const finalState = state ? state : stateObject

  // const renderHikes = hikes.map(state => <HikeCard key={state.id} state={state} hikes={state.hikes}/>)
    
  console.log(hikes)
  // console.log(finalState.hikes.name)
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