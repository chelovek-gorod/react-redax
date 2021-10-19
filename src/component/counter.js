import React from 'react';

//const props = {counter,increment,decrement,reset};

function Counter(props) {
   return (
      <div className = "App">
         <div>{props.counter}</div>
         <div>
            <button onClick = {props.increment}>INCREMENT BY 1</button>
         </div>
         <div>
            <button onClick = {props.decrement}>DECREMENT BY 1</button>
         </div>
         <button onClick = {props.reset}>RESET</button>
      </div>
   );
}
export default Counter;