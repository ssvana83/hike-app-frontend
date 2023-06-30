import HikeCard from "./HikeCard"

const HikesList = ( hikes ) => {
  console.log (hikes)
  const renderHikes = hikes.map(hike => <HikeCard key={hike.id} hike={hike} />)
  return (
    <div>
      {renderHikes}
      </div>
  )
}

export default HikesList