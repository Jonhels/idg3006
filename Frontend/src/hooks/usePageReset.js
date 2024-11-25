import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSensorContext } from "../context/SensorContext";

export const usePageReset = ({ setStoryActive }) => {
  const { clickedSensors, setClickedSensors, } = useSensorContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (clickedSensors.includes("P1")) {
      console.log("Reset triggered");
      setStoryActive(false);
      navigate("/");

      // Clear P1 from clickedSensors after handling reset
      setClickedSensors((prev) => prev.filter((sensor) => sensor !== "P1"));
    }
  }, [clickedSensors, navigate, setStoryActive, setClickedSensors]);
};
