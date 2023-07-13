import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HikeForm from './HikeForm';
import HikesList from './HikesList';

const StateCardHikes = ({ states }) => {
  const [hikes, setHikes] = useState([])
  const { id } = useParams();

  const exactState = parseInt(window.location.href.split('/')[4])
  const foundState = states.find(state => state.id === exactState)

  const [stateObject, setStateObject] = useState({});
  useEffect(() => {
    fetch(`http://localhost:9393/hikes`)
      .then(resp => resp.json())
      .then(states => setStateObject(states))
  }, states);

 
  useEffect(() => {
    fetch(`http://localhost:9393/states/${exactState}`)
      .then(resp => resp.json())
      .then(state => setHikes(state.hikes))
  }, states);

  console.log(hikes)
  // map over hikes and then render 
  
  return (
    <div>
      <HikesList hikes={hikes} />
      <HikeForm setHikes={setHikes} foundState={foundState} />
    </div>
  )
}

export default StateCardHikes;



