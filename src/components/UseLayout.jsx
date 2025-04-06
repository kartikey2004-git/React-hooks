/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayout = () => {
  const [EffectValue, setEffectValue] = useState("intial");

  const [layoutEffectValue, setLayoutEffectValue] = useState("intial");

  useEffect(() => {
    console.log("useEffect");
    setEffectValue(EffectValue);
  }, []); // Run after the first render

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    setLayoutEffectValue(layoutEffectValue);
  }, []); // Runs after the first render but before the browser is even painted with the UI
  return (
    <div>
      <p>useEffect Value: {EffectValue}</p>
      <p>useLayoutEffect Value: {layoutEffectValue}</p>
    </div>
  );
};

export default UseLayout