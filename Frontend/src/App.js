import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Rainforest from "./components/RainforestView/Rainforest";
import Dessertforest from "./components/dessert/Dessertforest";
import Antartica from "./components/Antartica/Antartica";
import NavigationHandler from "./components/NavigationHandler";
import { SensorProvider } from "./context/SensorContext";
import Test from "./components/test";

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
            <Link to="/cold">Antartica</Link>
          </nav>

          <Routes>
          <Route
              path="/"
              element={<Test/>}
            />
            <Route
              path="/rainforest"
              element={<Rainforest storyActive={storyActive} setStoryActive={setStoryActive} />}
            />
            <Route path="/dessert" element={<Dessertforest storyActive={storyActive} setStoryActive={setStoryActive} />} />
            <Route path="/cold" element={<Antartica />} storyActive={storyActive} setStoryActive={setStoryActive} />
          </Routes>
        </div>
      </Router>
    </SensorProvider>
  );
}

export default App;
