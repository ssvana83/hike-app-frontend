import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/Home"
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
        <Switch>
          <Route path="/hikes/new">
            <HikeForm />
          </Route>
          <Route path="/hikes/:id">
            <HikeCard />
          </Route>
          <Route path="/hikes">
            <HikesContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
