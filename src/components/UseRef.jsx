import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState();

   const inputRef = useRef(null)

   useEffect(() => {
    inputRef.current && inputRef.current.focus()
   },[])

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />

      <p>
        You typed: <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

export default UseRef;

//  mainly used to reference inside things inside my application or create a beautiful object which can persist across re render


// i want focus on input when component is re rendered for the first time


// we can consider it like document.queryselector , we get the access of particular element not exactly but kind of 