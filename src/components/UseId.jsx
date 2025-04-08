import React, { useId } from "react";

const CheckBox = () => {

  const id = useId()
  // console.log(id)

  return (
    <div className="flex gap-4 text-xl">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>Accept terms</label>
      {/* when we click on label , itself it will check that checkbox */}
    </div>
  );
};

export default CheckBox;

// instead of providing manual id , we can use useId hook , it has generated the random id 

// it helps in generating a unique ID which is stable across the servr and client

// also helps in hydration mismatches

// but when we have to map the data , key is passed ,  this is not recommended here to use hook useId in mapping