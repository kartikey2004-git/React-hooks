import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function : clean interval before unmount or re rendered

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []); // Run effect only on mount

  return <p>Seconds elapsed: {seconds}</p>;
};

export default Timer;
