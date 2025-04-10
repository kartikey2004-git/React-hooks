import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const [isPending, startTransition] = useTransition();

  // it will marks this update as non urgent , that others thing of our app can perform perfectly

  /*   useTransition():

     Allows components to avoid undesirable    loading states by waiting for content to  load before transitioning to the next screen. 
     
     It also allows components to defer (टालना) slower, data fetching updates until subsequent renders so that more crucial  updates can be rendered immediately.
  
  */

  const runExpensiveCalculation = (value) => {
    const calculatedResults = [];
    for (let i = 0; i < 20000; i++) {
      const result = i * parseInt(value || "0", 10);

      /* If value is truthy, it returns value.
  
   If value is falsy, it falls back to "0". 
          
  This parses the result as an integer, using base 10 (decimal).
*/

      if (i % 1000 === 0) {
        calculatedResults.push(result);
      }
    }
    return calculatedResults;
  };

  const handleInputChange = (e) => {
    // Update the input immediately (high priority)

    const newValue = e.target.value;
    setInput(newValue);

    // Defer the expensive calculation (low priority)

    startTransition(() => {
      const calculatedResults = runExpensiveCalculation(newValue);
      setResults(calculatedResults);
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">useTransition Demo</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">
          Enter a number:
        </label>
        <input
          type="number"
          value={input}
          onChange={handleInputChange}
          className="border p-2 rounded w-40 text-center"
        />
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-left">Results:</h3>
        {isPending && <p className="text-sm text-gray-500 text-left">Calculating...</p>}
        <ul className="text-left p-4 bg-gray-50 max-h-60 overflow-y-auto">
          {results.map((result, index) => (
            <li key={index} className="mb-1 list-disc ml-4">
              {index * 1000} × {input || 0} = {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseTransition;

// some expensive calculation or an api  call which takes some time, which making our app lag and slow , to avoid this situation we use , useTransition hook 

// we are now able to loading indicator or a pending UI by default or more complex cases


// usecase : when we have multiple tabs inside our website , or data is loading when we clicking on tab


// Similar hook : useDeffered value that lets you defer updating a part of the UI