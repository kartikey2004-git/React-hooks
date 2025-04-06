import React from 'react'

const PropDrill = ({state}) => {
  return (
    <div>Passed State - {state}</div>
  )
}

export default PropDrill


// problem arises when there is another component inside the parent component , and we have to pass state again to component


// Now problem arises state is being passed to grandParent to parent to child or even more ....... This is called PropDrilling

// useContext used to avoid propDrilling