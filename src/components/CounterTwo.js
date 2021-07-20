import React, {useReducer} from 'react';
//initialize initalState as an object
const initialState = {
  firstCounter: 0
}

//cases in our reducer must return objects as well
const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return {firstCounter: state.firstCounter + 1};
    case 'decrement':
      return {firstCounter: state.firstCounter - 1};
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

//main component called CounterTwo
const CounterTwo = () => {
  //below we call useReducer, passing in reducer function and initialState object.
  //useReducer returns a pair of values, count.firstCounter and dispatch
  const[count, dispatch]=useReducer(reducer, initialState);


  //line 34: count.firstCounter is refering to the inital state of the counter
  //lines 35 - 37: we must match string action into an object as well with {type: 'action'}
  return (
    <div>
      <h2>Counter Two</h2>
      <div className = "CounterOne">
      <h5>Complex Counter</h5>
      <div>Count: {count.firstCounter}</div>
      <button onClick={()=>dispatch({ type:'increment' })}>Increment</button>
      <button onClick={()=>dispatch({ type:'decrement' })}>Decrement</button>
      <button onClick={()=>dispatch({ type:'reset' })}>Reset</button>
    </div>
    </div>
  );
};

export default CounterTwo;