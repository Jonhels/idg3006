import React, { createContext, useContext } from "react";
import {useSensorEvents} from "../hooks/useSensorEvents";

const SensorContext = createContext();

export const SensorProvider = ({children}) => {
    const sensorData = useSensorEvents();

    return(
        <SensorContext.Provider value={sensorData}>
            {children}
        </SensorContext.Provider>
    );
};

export const useSensorContext = () => useContext(SensorContext);
