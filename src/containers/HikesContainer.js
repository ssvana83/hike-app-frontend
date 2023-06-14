import { useState, useEffect } from "react"
import HikesList from "../components/HikesList"

const HikesContainer = () => {
  const [hikes, setHikes] = useState([]);
  const [loading, setLoadiing] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:3000/hikes")
        const data = await resp.json()
        setHikes(data)
        setLoadiing(false)
      } catch (error) {
        alert(error)
      }
    }
    fetchData()
  }, []);

  if (!!loading) return <h1>Loading...</h1>

  return (
    <>
      <div>Our Hikes</div>
      <HikesList hikes={hikes} />
    </>
  )
}

export default HikesContainer