import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HikeCard from "./components/HikeCard";
import HikeForm from "./components/HikeForm";
import StateCardHikes from './components/StateCardHikes';
import StatesList from './components/StatesList';
import HikesList from './components/HikesList';
import NewStateForm from './components/NewStateForm';

function App() {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/states')
      .then(response => response.json())
      .then(data => {
        setStates(data)
      })
  }, [])

  // create a submit handler function
  // this function will handle the submission of a new state and also update overall state
  function handleStateAdd(addedState) {
    const updatedStates = [...states, addedState]
    setStates(updatedStates)
  }

  function handleDeleteState(deletedState) {
    const updatedStates = states.filter((state) => state.id !== deletedState.id);
    setStates(updatedStates)
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header storename="The Hikers Companion" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/states" element={<StatesList states={states} onDeleteState={handleDeleteState}/>} />
          <Route path="/states/new" element={<NewStateForm handleStateAdd={handleStateAdd}/>} />
          <Route path="/states/:state_id/hikes" element={<StateCardHikes states={states} />} />
          <Route path="/states/:state_id/hikes/new" element={<HikeForm />} />
          <Route path="/hikes" element={<HikesList states={states} />} />
          <Route path="/hikes/:id" element={<HikeCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
