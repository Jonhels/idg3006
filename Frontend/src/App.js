import './App.css';
import React, { useState } from "react";
import Rainforest from './components/Pages/RainforestView/Rainforest';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavigationHandler from "./components/NavigationHandler";
import { SensorProvider } from "./context/SensorContext";

import Dessertforest from './components/Pages/dessert/Dessertforest';
import Antartica from './components/Pages/Antartica/Antartica';
import Global from "./components/Pages/global/Global";
import ButtonTest from "./components/Pages/global/ButtonTest";
import Chainsaw from "./components/Pages/Chainsaw/Chainsaw";
import IlligalAct from './components/Pages/illigalAct/IlligalAct';
import GoodAct from './components/Pages/GoodAct/GoodAct';
import Challenge from './components/Pages/NextChallenge/Challenge';
import Wildfire from './components/Pages/WildfireChoice/WildfireChoice';
import DestroyedForest from './components/Pages/DestroyedForest/DestroyedForest';

function App() {
  const [storyActive, setStoryActive] = useState(false); // Tracks if a story is active

  return (
    <SensorProvider>
      <Router>
        {/* Navigation Handler to manage story and reset logic */}
        <NavigationHandler setStoryActive={setStoryActive} />
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/rainforest">RainForest</Link>
            <Link to="/dessert">Dessert</Link>
            <Link to="/cold">Antartca</Link>
            <Link to="/">Global</Link>
            <Link to="/button-test">ButtonTest</Link>
            <Link to="/chainsaw">Chainsaw</Link>
            <Link to="/illegal-act">Illegal Act</Link>
            <Link to="/good-act">Good Act</Link>
            <Link to="/challenge">Challenge</Link>
            <Link to="/wildfire">Wildfire</Link>
          </nav>
          <Routes>        
            <Route
              path="/rainforest"
              element={<Rainforest storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/dessert"
              element={<Dessertforest storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/cold"
              element={<Antartica storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/"
              element={<Global storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/button-test"
              element={<ButtonTest storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/chainsaw"
              element={<Chainsaw storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/illegal-act"
              element={<IlligalAct storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/good-act"
              element={<GoodAct storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/challenge"
              element={<Challenge storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/wildfire"
              element={<Wildfire storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route
              path="/DestroyedForest"
              element={<DestroyedForest storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
          </Routes>
        </div>
      </Router>
    </SensorProvider>
  );
}

export default App;
