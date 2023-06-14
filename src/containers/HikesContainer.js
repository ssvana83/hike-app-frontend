import { useState, useEffect } from "react"
import HikesList from "../components/HikesList"

const HikesContainer = () => {
  const [hikes, setHikes] = useState([]);
  const [loading, setLoadiing] = useState(true);
  
  useEffect(() => {
    fetch('http://localhost:3000/hikes')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setHikes(data)
    })
  }, []);

  
  return (
    <>
      <h2>Our Hikes</h2>
      <HikesList hikes={hikes} />
    </>
  )
}

export default HikesContainer