import React, { useReducer } from "react";

// Starts the counter at 0.
const initialState = 0;

/* A pure function that updates the state based on the action (action.type) received.

• state: current value of the counter.
• action: object that describes how to update the state.

*/

function CountReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;

    default:
      return state; // return the current state
  }
}

/*

• count: current state value.
• dispatch: function to send an action to the reducer.
• CountReducer: function to handle the updates.
• intialState: starting value.

*/

const UseReducer = () => {
  const [count, dispatch] = useReducer(CountReducer, initialState);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        Increment by 5
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default UseReducer;

/* 

• usereducer + Context API acts a state management library is popular

• useReducer hook is ideal solution for manage complex states

• useReducer is a React hook used to manage more complex state logic than useState.

It's ideal when:

    • The state depends on previous state

    • The update logic involves multiple sub-values or complex conditions

    • You want to follow a Redux-style pattern


• It takes a reducer function and an initial state.

 It returns the current state (count) and a dispatch function to send actions.

 it will take bunch of things and returns a single thing

 function for manipulating states : dispatch will trigger the cases with respect to the types of action that is to be performed

 it works on every single aspect of state management 

 */



 /*

• useReducer	Used for complex state logic
• state	Holds the count
• action	Object that tells reducer what to do
• dispatch	Triggers state changes
• Reducer cases	Handles INCREMENT, DECREMENT, RESET
• UI	Buttons trigger actions that update count

*/