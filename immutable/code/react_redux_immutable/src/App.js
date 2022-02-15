import React, { Component } from 'react';
import CartInfo from './CartInfo';
import InputBar from './InputBar';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <InputBar />
        <hr />
        <CartInfo />
      </div>
    );
  }
}

export default App;
