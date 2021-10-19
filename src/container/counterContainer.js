import { connect } from 'react-redux'
import Counter from '../component/counter'
import { increment, decrement, reset } from '../actions/action';

const mapStateToProps = (state) => {
   console.log(state);
   return {
      counter: `A: ${state.albums}; P: ${state.photos}`
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