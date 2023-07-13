import StateCard from "./StateCard.js"

const StatesList = ({ states }) => {

  // const renderStates = states.map(state => <StateCard key={state.id} state={state} hikes={state.hikes} />)

  const renderStates = states.map((state) => (
    <StateCard 
      key={state.id}
      state={state}
      hikes={state.hikes}
    />
  ))
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