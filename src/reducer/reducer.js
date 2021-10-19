const initialState = {
   albums : 3,
   photos : 7
};


const reducer = (state = initialState, action) => {

   let obj = Object.assign({}, state);
   switch (action.type) {
      case 'INCREMENT': 
         obj.albums++;
         return obj;
      case 'DECREMENT':
         obj.photos--;
         return obj;
      case 'RESET' : return initialState;
      default: return state;
   }
}
export default reducer;