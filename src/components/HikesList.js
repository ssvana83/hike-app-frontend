import HikeCard from "./HikeCard"


const HikesList = ( {states} ) => {
  console.log (states)
  const renderHikes = states.map(hike => <HikeCard key={hike.id} hike={hike} />)
  return (
    <div>
      {renderHikes}
      </div>
  )
}

export default HikesList;

