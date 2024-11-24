import './App.css';
import React, { useState } from 'react';
import Rainforest from './components/RainforestView/Rainforest';
import SensorDisplay from './components/SensorDisplay';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dessertforest from './components/dessert/Dessertforest';
import Antartica from './components/Antartica/Antartica';

function App() {
    const [activePage, setActivePage] = useState('home');
    const [storyActive, setStoryActive] = useState(false);
    const [pressedButtons, setPressedButtons] = useState([]);
    const [clickedSensors, setClickedSensors] = useState([]);
    const [pendingPage, setPendingPage] = useState(null); // Stores the page to switch to
    const [isLocked, setIsLocked] = useState(false); // Lock state to prevent multiple combinations

    const handleStartButton = (sensorId) => {
      if (sensorId === "P1") { // Check if the Start button (P1) is pressed
          if (storyActive) {
              // Reset story and unlock system
              setStoryActive(false);
              setActivePage('home');
              setPendingPage(null);
              setIsLocked(false); // Unlock for new combinations
          } else if (pendingPage && !isLocked) {
              // Navigate to the pending page and lock
              setActivePage(pendingPage);
              setPendingPage(null);
              setIsLocked(true); // Lock to prevent further changes
          }
      }
  };
  

    const handleCombination = (combination) => {
        if (!isLocked) { // Only set pending page if unlocked
            if (combination.includes("button_a_pressed") && combination.includes("button_b_pressed")) {
                setPendingPage("rainforest"); // Set pending page for Rainforest
            }
            // Add logic for other pages
        }
    };

    const handlePressedButtons = (buttons) => {
        setPressedButtons(buttons);
    };

    const handleClickedSensors = (sensors) => {
        setClickedSensors(sensors);
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <button onClick={handleStartButton}>
                        {storyActive || isLocked ? "Reset" : "Start"}
                    </button>
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
                                onCombination={handleCombination}
                                onPressedButtons={handlePressedButtons}
                                onClickedSensors={handleClickedSensors}
                                onStartButton={handleStartButton}
                            />
                        }
                    />
                    <Route
                        path="/rainforest"
                        element={
                            <Rainforest
                                storyActive={storyActive}
                                setStoryActive={setStoryActive}
                                pressedButtons={pressedButtons}
                                clickedSensors={clickedSensors}
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
