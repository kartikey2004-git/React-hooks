import React, { useReducer } from "react";

const intialState = 0;

function CountReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0

    default:
      break
  }
}

const UseReducer = () => {

  const [count , dispatch ] = useReducer(CountReducer,intialState)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({type : "INCREMENT" , value: 5})}>
        Increment by 5
      </button>

      <button onClick={() => dispatch({type : "DECREMENT"})}>-</button>

      <button onClick={() => dispatch({type : "RESET"})}>Reset</button>
    </div>
  );
};

export default UseReducer



// useReducer hook is ideal solution for manage comple states

// it will take bunch of things and returns a single thing


// function for manipulating states : dispatch will trigger the cases with respect to the types of action that is to be performed

// it works on every single aspect of state management