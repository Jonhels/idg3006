import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Rainforest from "./components/RainforestView/Rainforest";
import SensorDisplay from "./components/SensorDisplay";
import Dessertforest from "./components/dessert/Dessertforest";
import Antartica from "./components/Antartica/Antartica";
import NavigationHandler from "./components/NavigationHandler";

function App() {
  const [storyActive, setStoryActive] = useState(false); // Tracks if a story is active
  const [pressedButtons, setPressedButtons] = useState([]); // Tracks pressed button combinations
  const [clickedSensors, setClickedSensors] = useState([]); // Tracks clicked sensors
  const [pendingPage, setPendingPage] = useState(null); // Tracks the pending page for navigation
  const [isLocked, setIsLocked] = useState(false); // Prevents new combinations during active story

  // Handle incoming button combinations
  const handleCombination = (combination) => {
    console.log("Combination received:", combination);
    if (
      combination.includes("button_a_pressed") &&
      combination.includes("button_b_pressed")
    ) {
      console.log("Valid combination detected: rainforest");
      setPendingPage("rainforest"); // Sets the target page to Rainforest
    } else {
      console.log("Invalid combination or no action needed.");
    }
  };

  return (
    <Router>
      {/* Navigation Handler to manage story and reset logic */}
      <NavigationHandler
        storyActive={storyActive}
        setStoryActive={setStoryActive}
        pendingPage={pendingPage}
        setPendingPage={setPendingPage}
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        setPressedButtons={setPressedButtons} // Reset button state when resetting
        setClickedSensors={setClickedSensors} // Reset sensor state when resetting
      />

      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rainforest">RainForest</Link>
          <Link to="/dessert">Dessert</Link>
          <Link to="/cold">Antartca</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <SensorDisplay
                onCombination={handleCombination} // Handle button combinations
                onPressedButtons={setPressedButtons} // Update pressed buttons
                onClickedSensors={setClickedSensors} // Update clicked sensors
              />
            }
          />
          <Route
            path="/rainforest"
            element={
              <Rainforest
                storyActive={storyActive} // Tracks story state
                setStoryActive={setStoryActive} // Allows resetting story state
                pressedButtons={pressedButtons} // Pass button states
                clickedSensors={clickedSensors} // Pass sensor states
              />
            }
          />
          <Route
            path="/dessert"
            element={
              <Dessertforest
                storyActive={storyActive}
                pressedButtons={pressedButtons}
                clickedSensors={clickedSensors}
              />
            }
          />
          <Route
            path="/cold"
            element={
              <Antartica
                storyActive={storyActive}
                pressedButtons={pressedButtons}
                clickedSensors={clickedSensors}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
