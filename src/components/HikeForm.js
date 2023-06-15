import { useState } from 'react'
import { useHistory } from 'react'

const HikeForm = () => {
  const [name, setName] = useState("")
  const [length, setLength] = useState("")
  const [difficultyLevel, setDifficultyLevel] = useState("")
  const [estimatedTime, setEstimatedTime] = useState("")
  
  const handleSubmit = e => {
    e.preventDefault()
    debugger
  }

  return (
    <>
    <div>Create New Hike</div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input onChange={} type="text" name="name" value={name} required />
      <label htmlFor="length">Length (miles)</label>
      <input onChange={} type="text" name="length" value={length} required />
      <label htmlFor="difficultyLevel">Difficulty Level</label>
      <input onChange={} type="text" name="difficultyLevel" value={difficultyLevel} required />
      <label htmlFor="estimatedTime">Estimated Time (minutes)</label>
      <input onChange={} type="text" name="estimatedTime" value={estimatedTime} required />
      <input type="submit" value="Create Hike" />

    </form>
    </>
  )
}

export default HikeForm