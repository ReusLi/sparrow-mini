import React, { useReducer, useContext } from "react";

const myReducer = (state: any, action: any) => {
  switch (action.type) {
    case "reset":
      return { count: 0};
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
type MyContext = {
  state?: any;
  dispatch?: any;
}
const myContext = React.createContext<MyContext>({});

const ContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });
  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};

function Counter() {
  const { state, dispatch } = useContext(myContext);
  return (
    <div>
      Counter Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

function CounterTest() {
  const { state, dispatch } = useContext(myContext);
  return (
    <div>
      CounterTest Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

const myApp = () => {
  return (
    <div className="App">
      <ContextProvider>
        <Counter />
        <CounterTest />
      </ContextProvider>
    </div>
  );
};

export { myReducer, myContext, ContextProvider };
export default myApp;