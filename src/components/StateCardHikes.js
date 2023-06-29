import React from 'react'

const StateCardHikes = ({states}) => {
  const renderHikes = states.hikes.map()
  return (
    <div>
      <ul>
        {renderHikes}
      </ul>

    </div>
  )
}

export default StateCardHikes;