import React, { useRef, useState } from "react";

const UseRefVsUseState = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  // both are used to storing value of count

  const incrementState = () => setCount(count + 1)

  const incrementRef = () => {
    countRef.current += 1;
    console.log("Ref Count:", countRef.current)
  }

  return (
    <div>
      <h2>useRef Vs useState</h2><br />

      <div>
        <h3>useState:</h3>
        <p>State Count: {count}</p>
        <button onClick={incrementState}>Increment State</button>
      </div><br />

      <div>
        <h3>useRef:</h3>
        <p>Ref Count (check console) : {countRef.current}</p>
        <button onClick={incrementRef}>incrementRef</button>
      </div>
    </div>
  )
}

export default UseRefVsUseState

// state triggered re-rendered for the component

// ref doesn't triggered re-rendered for the component

// value persists across re-renders