import React, { Component } from 'react';
import CartInfo from './CartInfo';
import {Map} from 'immutable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: Map({})
    }
  }
  save = () => {
    const goods_name = this.refs.goods_name.value;
    const count = this.refs.count.value;
    const newCart = this.state.cart.set(goods_name, count);
    this.setState({
      cart: newCart
    })
  }
  render() {
    return (
      <div>
        商品：<input type="text" ref="goods_name" /><br/>
        数量：<input type="number" ref="count" /><br />
        <button onClick={this.save}>保存</button>
        <hr />
        <CartInfo cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
