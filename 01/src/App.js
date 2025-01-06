import "./App.css";
import { useState, useEffect, useReducer, act } from "react";

function reducer(state, action){
  switch (action.type) {
    case "increment":
      return { count : state.count + 1 };
    case "decrement":
      return { count : state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count : 0 });


  const handleDecrement = () => dispatch({ type: "decrement" });
  

  return <div>

    <button onClick={
      () => dispatch({ type: 'increment' })
      }> + </button>
    
    <span>{state.count}</span>
    <button onClick={handleDecrement}> - </button>
  </div>;
}

