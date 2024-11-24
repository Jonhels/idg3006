import './App.css';
import Rainforest from './components/Pages/RainforestView/Rainforest';
import SensorDisplay from './components/SensorDisplay';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dessertforest from './components/Pages/dessert/Dessertforest';
import Antartica from './components/Pages/Antartica/Antartica';
import Global from "./components/Pages/global/Global";
import ButtonTest from "./components/Pages/global/ButtonTest";
import Chainsaw from "./components/Pages/Chainsaw/Chainsaw";
import IlligalAct from './components/Pages/illigalAct/IlligalAct';
import GoodAct from './components/Pages/GoodAct/GoodAct';
import Challenge from './components/Pages/NextChallenge/Challenge';
import Wildfire from './components/Pages/WildfireChoice/WildfireChoice';

function App() {
  <nav>
    <Link to="/">Home</Link>
    <Link to="/rainforest">RainForest</Link>
    <Link to="/dessert">Dessert</Link>
    <Link to="/cold">Antartca</Link>
    <Link to="/Global">Global</Link>
    <Link to="/ButtonTest">ButtonTest</Link>
    <Link to="/chainsaw">Chainsaw</Link>
    <Link to="/IlligalAct">Chainsaw</Link>
  </nav>
  return (
    <Router>
        <div className="App">
          <Routes>
              <Route path="/" element={<SensorDisplay  />} />
              <Route path="/Rainforest" element={<Rainforest />} />
              <Route path="/dessert" element={<Dessertforest/>} />
              <Route path='/cold' element={<Antartica/>} />
              <Route path='/Global' element={<Global/>} />
              <Route path='/button-Test' element={<ButtonTest/>} />
              <Route path='/Chainsaw' element={<Chainsaw/>} />
              <Route path='/IlligalACt' element={<IlligalAct/>} />
              <Route path='/GoodAct' element={<GoodAct/>} />
              <Route path='/Challenge' element={<Challenge/>} />
              <Route path='/Wildfire' element={<Wildfire/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
