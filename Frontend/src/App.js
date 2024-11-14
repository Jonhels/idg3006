import './App.css';
import Rainforest from './components/RainforestView/Rainforest';
import SensorDisplay from './components/SensorDisplay';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dessertforest from './components/dessert/Dessertforest';


function App() {
  return (
    <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/rainforest">RainForest</Link>
            <Link to="/dessert">Dessert</Link>
          </nav>

          <Routes>
              <Route path="/" element={<SensorDisplay  />} />
              <Route path="/Rainforest" element={<Rainforest />} />
              <Route path="/dessert" element={<Dessertforest/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
