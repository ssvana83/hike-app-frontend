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
import StateEdit from './components/StateEdit';

function App() {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/states')
      .then(response => response.json())
      .then(data => {
        setStates(data)
      })
  }, [])

  function handleStateAdd(addedState) {
    const updatedStates = [...states, addedState]
    setStates(updatedStates)
  }

  function deleteState(deletedState) {
    const updatedStates = states.filter((state) => state.id !== deletedState.id);
    setStates(updatedStates)
  }

  function handleUpdateState(updatedStateObj) {
    const updatedStates = states.map((state) => {
      if (state.id === updatedStateObj.id) {
        return updatedStateObj;
      } else {
        return state;
    }
  });
    setStates(updatedStates);
}

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header storename="The Hikers Companion" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/states" element={<StatesList states={states} deleteState={deleteState} onUpdateState={handleUpdateState}/>} />
          <Route path="/states/new" element={<NewStateForm handleStateAdd={handleStateAdd}/>} />
          <Route path="/states/:state_id/hikes" element={<StateCardHikes states={states} />} />
          <Route path="/states/:state_id/hikes/new" element={<HikeForm />} />
          <Route path="/states/:id" element={<StateEdit onUpdateState={handleUpdateState}/>}/>
          <Route path="/hikes" element={<HikesList states={states} />} />
          <Route path="/hikes/:id" element={<HikeCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
