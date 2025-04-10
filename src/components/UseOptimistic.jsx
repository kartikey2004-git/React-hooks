import React, { useOptimistic, useState } from "react";

const UseOptimistic = () => {
  const [todos, setTodos] = useState([]);

  // it will take state (todos) that is working for , it will acts as a placeholder , now it will be tracking paricular state

  const [ optimisticTodos , setOptimisticTodos ] = useOptimistic(todos, (oldTodos, newTodo) => [
    ...oldTodos,
    { text: newTodo, pending: true },
  ])

  const handleAddTodo = async (formData) => {
    const newTodo = formData.get("todo");

    setOptimisticTodos(newTodo)

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, pending: false },
    ])
  }

  return (
    <div>
      <form action={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter Todo..." />
        <button type="submit">Add Todo</button>
      </form>

      <ul className="list-disc pl-5">
        {optimisticTodos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            {todo.pending && <span>(Adding...)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseOptimistic;

// when we add todo , this will make an asyncronous call and it will submit this todo and get response from server

// production grade apps show placeholder instead of loading indicator