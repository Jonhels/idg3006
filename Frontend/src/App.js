import './App.css';
import RainforestView from './components/RainforestView/Rainforest';
import SensorDisplay from './components/SensorDisplay';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SensorDisplay  />} />
          <Route path="/Rainforest" element={<RainforestView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
