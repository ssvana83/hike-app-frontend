import React, { useState, useEffect } from 'react';
import Hike from './Hike';

const State = ({ hikes }) => {
  const displayHikes = hikes.map(p => <Hike key={hikes.id} hike={hikes} />)

  return (
    <div>

      <br />
      <hr />
      <h3>Hikes:</h3>
      <br />
      {displayHikes}
      <br />

    </div>
  )
}

export default State;