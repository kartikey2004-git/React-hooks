import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import DataFetcher from "../components/DataFetcher";
import UseLayout from "../components/useLayout";
import UseRef from "../components/UseRef";
import UseRefVsUseState from "../components/UseRefVsUseState";
import PropDrill from "../components/PropDrill";
import UseReducer from "../components/UseReducer";
import ShoppingCart from "../components/ShoppingCart";
import UseImperativeHandle from "../components/useImperativeHandle";
import CheckBox from "../components/UseId";
import Timer from "../components/Timer";

const HooksPart1 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("re rendered");

    return () => {}; // this will run when component is unmounted and component is removed from ui
  }, [count]);

  return (
    <div className="container flex gap-3">
      <ThemeSwitcher />
      <br />
      <div>
        <p>You clicked {count} times</p>
        <br />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <br />
      <br />
      Controlled Input
      <br />
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        You typed: <strong>{inputValue}</strong>
      </p>
      <br />
      <br />
      {toggle && <Timer />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button><br />
      <PropDrill state={inputValue} />
    </div>
  );
};

export default HooksPart1;

// usestate is used to adding the state in our functional component

// state refers to data which changes over time affects how a component rendered and how a component behave ?

// memory to keep track of information

// Onchange responsible for giving the current value inside the input

// useEffect helps in performing side effects in our component

// it decides the lifecycle of our component , what happens we a component is rendered for the first time , what happens when state is updated ,  what happens when compnent is re - rendered

// popular usecase of useffect hook for fetching the data

// useContext helps in basically managing the states across our application

// passing state to components
