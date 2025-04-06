import React, { useReducer } from "react";

const intialCart = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];

    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
}

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, intialCart);

  const handleAdd = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const handleRemove = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const TotalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - ${item.price}
            </span>
            <span>Quantity : {item.quantity}</span>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Total : ${TotalPrice}</h3>

      <button
        onClick={() =>
          handleAdd({ id: Date.now(), name: "New Item", price: 10 })
        }
      >
        Add Item
      </button>

      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;

/* 

• useReducer hook, which helps manage state transitions cleanly when you have multiple related states or complex updates.

• useReducer is used when you want to manage more complex state logic compared to useState.

---------------------------------------------------


useReducer Hook

• cart → current state of the cart (an array of items).

dispatch → function to trigger actions (add, remove, clear).


• cartReducer Function → the reducer function that handles the logic , this function decides how to update the state based on the action.type


• intialCart → This is your initial cart state, and it’s just an empty array.
When the app loads, the cart has no items.





------------------------------------------------------

What is a reducer?
It’s a function that takes:

• state → the current cart array

• action → an object describing what happened (like ADD_ITEM or REMOVE_ITEM)

• and returns a new updated state


-----------------------------------------------------


1. You copy the current state using the spread operator (...state)


You add a new item at the end with:

  •  All properties of action.payload (like name, price, and id)

  •  Plus, you add quantity: 1


2. You remove the item whose id matches the one sent in action.payload.

• It filters out that item and returns the rest.



3. Simply resets the cart to an empty array.




*/
