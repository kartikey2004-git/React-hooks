import React, { useImperativeHandle, useRef, useState } from "react";

const FancyInput = ({ref}) => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  useImperativeHandle(ref,() => ({
    focus: () => {
      inputRef.current.focus()
    },
    clear: () => {
      inputRef.current.value = ""
    }
  }))

  // it will give the reference of child component to parent component

  return (
    <div>
      <input
        type="text"
        placeholder="Type Something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />

      <p>
        You typed : <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

export default FancyInput;


// we have to pass inputRef from child component to parent component