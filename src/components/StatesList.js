import StateCard from "./StateCard"

const StatesList = ({ states }) => {
  const renderStates = states.map(state => <StateCard key={state.id} state={state} />)
  return (
    <div>{renderStates}</div>
  )
}

export default StatesList