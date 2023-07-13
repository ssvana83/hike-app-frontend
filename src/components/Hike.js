import React from 'react'

const Hike = ({ hike }) => {
  console.log(hike)

  return (
    <div>
      <h3>{hike.name} {hike.length}</h3>
      <button>Edit</button>
      <button>Delete</button>
      <br />
    </div>
  )
}

export default Hike;