import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HikeForm = ({ foundState }) => {
  const [hike, setHike] = useState({
    name: "",
    length: "",
    difficultyLevel: "",
    estimatedTime: "",
    state_id: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setHike({
      ...hike,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newHike = {
      name: hike.name,
      length: hike.length,
      difficulty_level: hike.difficultyLevel,
      estimated_time: hike.estimatedTime,
      state_id: foundState.id
    }
    fetch(`http://localhost:9393/states/${foundState.id}/hikes`, {
      method: "POST",
      headers: {
        "Content_Type": "application/json",
      },
      body: JSON.stringify(newHike)
    })
      .then((r) => r.json())
      .then((hike) => console.log(hike))

  }

  return (
    <>
      <h3>Create New Hike</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" name="name" value={hike.name} required /><br />
        <label htmlFor="length">Length (miles)</label>
        <input onChange={handleChange} type="number" name="length" value={hike.length} required /><br />
        <label htmlFor="difficultyLevel">Difficulty Level</label>
        <input onChange={handleChange} type="number" name="difficultyLevel" value={hike.difficultyLevel} required /><br />
        <label htmlFor="estimatedTime">Estimated Time (minutes)</label>
        <input onChange={handleChange} type="number" name="estimatedTime" value={hike.estimatedTime} required /><br />
        <input type="submit" value="Create Hike" />
      </form>
    </>
  )
}

export default HikeForm;