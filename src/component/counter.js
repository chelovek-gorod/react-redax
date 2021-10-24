import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../redux/action';

//const props = {counter,increment,decrement,reset};

function Counter(props) {
   return (
      <div className = "App">
         <div>{props.c}</div>
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

const mapStateToProps = (state) => {
   console.log(state);
   return {
      c: `A: ${state.albums}; P: ${state.photos}`
   };
 
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);