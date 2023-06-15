const HikeCard = ({ hike }) => {
  return (
    <div>
      <h3>Name: {hike.name}</h3>
      <h4>Length: {hike.length} (miles)</h4>
      <h4>Difficulty Level: {hike.difficulty_level}</h4>
      <h4>Estimated Time: {hike.estimated_time} (minutes)</h4>
    </div>
  )
}

export default HikeCard