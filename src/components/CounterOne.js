import React, {useReducer} from 'react';
//define useReducers arguments outside of component
//defines initalState
const initialState = 0;
//define reducer function
//reducer takes current STATE, performs ACTION, and returns new state
//reducer is passed to the useReducer function in our funcitonal component
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function CounterOne() {
  //useReducer returns a pair of values we can get ahold of using the array destructuring syntax
  const[count, dispatch]=useReducer(reducer, initialState);

  return (
    <div className = "CounterOne">
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default CounterOne;

