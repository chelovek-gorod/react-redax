import React, { Component } from 'react';
import './App.css';
import Counter from './container/counterContainer';

class App extends Component {
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
               <Counter/>
            </header>
         </div>
      );
   }
}
export default App;