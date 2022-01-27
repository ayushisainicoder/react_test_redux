import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from './components/Home';
import Player from './components/Player';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <>
    <Router>
    <NavBar title = "NBA PLAYER LIST" home_page= "Home"/>
    <div className="container">
   
      <Routes>
              <Route exact path="/" element={<HomeContainer/>}/>
              <Route exact path="/player"  element={<Player/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
