import React, { useDeferredValue, useState } from "react";

const UseDeferredValue = () => {
  const [input, setInput] = useState("");

  const deferredInput = useDeferredValue(input);
  const isStale = deferredInput !== input;

  const runExpensiveCalculation = (value) => {
    const calculatedResults = [];
    const num = parseInt(value, 10) || 0;

    for (let i = 0; i < 20000; i++) {
      const result = i * num;
      if (i % 1000 === 0) {
        calculatedResults.push(result);
      }
    }

    return calculatedResults;
  };

  const results = runExpensiveCalculation(deferredInput);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">useDeferredValue Demo</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Enter a number:</label>
        <input
          type="number"
          value={input}
          onChange={handleInputChange}
          className="border p-2 rounded w-40 text-center"
        />
      </div>

      <div>
        {isStale && <div className="mb-2 text-sm text-gray-500">Showing previous results while calculating...</div>}
        <h3 className="font-semibold mb-2 text-left">Results:</h3>
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

export default UseDeferredValue;


// Similar hook : useDeffered value that lets you defer updating a part of the UI


// instead of showing loading , it shows the previous state of ui , that's it our app doesn't feel laggy


