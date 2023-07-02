import StateCard from "./StateCard"

const StatesList = ({ states }) => {

  const renderStates = states.map(state => <StateCard key={state.id} state={state} hikes={state.hikes} />)

  console.log(states)

  return (
    <div>
      <ul>
        {renderStates}
      </ul>
    </div>
  )
}

export default StatesList;