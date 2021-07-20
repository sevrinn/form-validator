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
  //useReducer returns a pair of values we can get ahold of using the array destructuring syntax, [currentState, dispatch]
  //the currentState we've called count here
  //the dispatch method allows us to execute code corresponding to a particular action defined in our reducer function. 
  const[count, dispatch]=useReducer(reducer, initialState);


  //each button gets an onClick event handler that is an arrow function where we dispatch the action
  return (
    <div className = "CounterOne">
    <h2>Simple Counter</h2>
      <div>Count: {count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  );
}

export default CounterOne;

