import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HikeCard from "./components/HikeCard";
import HikeForm from "./components/HikeForm";
import HikesContainer from "./containers/HikesContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan="Take a Hike!" storename="The Hikers Companion" />
        <Routes>
          
          <Route path="/hikes/new" element={<HikeForm />} />
          <Route path="/hikes/:id" element={<HikeCard />} />
          <Route path="/hikes" element={<HikesContainer />} />
          <Route path="/" element={<HomePage />} />
          


        </Routes>
      </Router>
    </div>
  );
}

export default App;
