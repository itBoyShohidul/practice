import React, { useReducer } from "react";
import { reducer } from "../reducers/countReducer";
import Bahok from "./Bahok";

const initialState = {
  count: 0,
  theme: "dark",
};

function Count() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, theme } = state;
  return (
    <div className={theme}>
      <h3>{count}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <hr />
      <Bahok />
    </div>
  );
}

export default Count;
