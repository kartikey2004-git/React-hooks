import React, { useRef } from "react";
import FancyInput from "./FancyInput";

const UseImperativeHandle = () => {
  const fancyInputRef = useRef()

  return (
    <div>
      <FancyInput ref={fancyInputRef}/>

      <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
      <button onClick={() => fancyInputRef.current.clear()}>Clear</button>
    </div>
  );
};

export default UseImperativeHandle;

// pass something to parent component from child component