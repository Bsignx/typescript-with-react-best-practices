import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterActions = CounterAction | ResetAction;

const initialState: CounterState = { count: 0 };

function reducer(state: CounterState, action: CounterActions) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
