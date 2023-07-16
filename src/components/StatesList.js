import StateCard from "./StateCard.js"

const StatesList = ({ states, deleteState, onUpdateState }) => {

  const renderStates = states.map((state) => (
    <StateCard 
      onUpdateState={onUpdateState}
      deleteState={deleteState}
      key={state.id}
      state={state}
      hikes={state.hikes}
    />
  ))

  return (
    <div>
      <ul>
        {renderStates}
      </ul>
    </div>
  )
}

export default StatesList;