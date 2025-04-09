import React from "react";
import UseLayout from "../components/useLayout";
import UseRef from "../components/UseRef";
import UseRefVsUseState from "../components/UseRefVsUseState";
import UseReducer from "../components/UseReducer";

const HooksPart3 = () => {
  return (
    <div>
      <UseLayout />
      <br /> <br />
      <UseRef />
      <br />
      <UseRefVsUseState />
      <br />
      <UseReducer />
    </div>
  );
};

export default HooksPart3;
