import React, { useEffect } from "react";

const HookExample = () => {
  useEffect(() => {
    console.log("re rendered");

    return () => {
      console.log("un mounted");
    }; // this will run when component is unmounted and component is removed from ui
  }, []);

  return <div>HookExample</div>;
};

export default HookExample

// cleanup function is useful when timer is going for particular component and u want to stop the timer


