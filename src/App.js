import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HikeCard from "./components/HikeCard";
import HikeForm from "./components/HikeForm";


import StateCardHikes from './components/StateCardHikes';
import StatesList from './components/StatesList';
import HikesList from './components/HikesList';

function App() {

  const [ states, setStates ] = useState([])
  const [hikes, setHikes] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/states')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setStates(data)
    })
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan="Take a Hike!" storename="The Hikers Companion" />
        <Routes>
            

          <Route path="/states" element={<StatesList states={ states } />} />
          <Route path="/states/:id/hikes" element={<StateCardHikes  states={ states } />} />
          <Route path="/hikes/new" element={<HikeForm />} />
          <Route path="/hikes/:id" element={<HikeCard />} />
          <Route path="/hikes" element={<HikesList states={ states }/>} />
          <Route path="/" element={<HomePage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
