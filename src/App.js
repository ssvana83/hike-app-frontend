import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HikeCard from "./components/HikeCard";
import HikeForm from "./components/HikeForm";
import HikesContainer from "./containers/HikesContainer";
import StatesContainer from './containers/StatesContainer';
import StateCard from './components/StateCard';

function App() {

  const [states, setStates] = useState([])
  const [hikes, setHikes] = useState([])
  useEffect(() => {
    fetch('http://localhost:9393/states')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setStates(data)
      // setPlayers(data)
    })
  }, [])

  // filter of hikes to pass into route below. will need an event listener
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan="Take a Hike!" storename="The Hikers Companion" />
        <Routes>
          <Route path="/states" element={<StatesContainer states={states} />} />
          <Route path="/states/:id" element={<StateCard  />} />
          <Route path="/hikes/new" element={<HikeForm />} />
          <Route path="/hikes/:id" element={<HikeCard />} />
          <Route path="/hikes" element={<HikesContainer hikes={hikes}/>} />
          <Route path="/" element={<HomePage />} />
          


        </Routes>
      </Router>
    </div>
  );
}

export default App;
