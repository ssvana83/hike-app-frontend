import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"

const HikeCard = ({ hike }) => {
  const { id } = useParams();  
  const [hikeObject, setHikeObject] = useState({});
  
  const finalHike = hike ? hike : hikeObject
  
  return (
    <div>
      <h3>Name: <Link to={`/hikes/${finalHike.id}`}>{finalHike.name}</Link></h3>
      <h4>Length: {finalHike.length} (miles)</h4>
      <h4>Difficulty Level: {finalHike.difficulty_level}</h4>
      <h4>Estimated Time: {finalHike.estimated_time} (minutes)</h4>
    </div>
  )
}

export default HikeCard