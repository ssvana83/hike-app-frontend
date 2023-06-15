import { useState } from 'react'
import { useHistory } from 'react'

const HikeForm = () => {
  const [hike, setHike] = useState({
    name: "",
    length: "",
    difficultyLevel: "",
    estimatedTime: ""
  })
  // const [length, setLength] = useState("")
  // const [difficultyLevel, setDifficultyLevel] = useState("")
  // const [estimatedTime, setEstimatedTime] = useState("")
  
  const handleChange = (e) => {
    setHike({
        ...hike,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    debugger
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

export default HikeForm