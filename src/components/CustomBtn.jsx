import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {

  const { pending } = useFormStatus();

  // useFormStatus reads the status of the parent <form> as if the form was a context provider

  // this hooks check if any form element in its parent component , if nearest form tag exist in parent tag , 

  // it gonna work for particular form tag , when form is submitting it automatically  , it automatically pickup the pickup , data , method , action...

  return (
    <button
      type="submit"
      className={`w-full py-2 px-4 font-semibold rounded-lg shadow-md text-white transition duration-300 ${
        pending
          ? "bg-blue-300 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  )
}

export default SubmitBtn


// we don't have to maintain any state , even if  form has deeply nested components 

// we can use useFormStatus anywhere inside the form and any component of this form... and access pending without prop drilling or Context Api or any state management 

