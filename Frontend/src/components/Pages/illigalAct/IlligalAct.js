import React, { useEffect } from "react";
import { usePageReset } from "../../../hooks/usePageReset";
import IlligalActSVG from "./IlligalActSVG";
import "./Act.css";

const IlligalAct = ({ setStoryActive }) => {
  // Apply the reset logic
  usePageReset({ setStoryActive });

  return (
    <div>
      <IlligalActSVG />
    </div>
  );
};

export default IlligalAct;
