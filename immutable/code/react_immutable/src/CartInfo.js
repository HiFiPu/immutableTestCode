import React, {Component} from 'react';
import {is} from 'immutable';

export default class CartInfo extends Component {
    shouldComponentUpdate(nextProps) {
        // return !nextProps.cart.equals(this.props.cart);
        return !is(nextProps.cart, this.props.cart);
    }
    render() {
        console.log('cartInfo render');
        const lis = [];
        // for(let k in this.props.cart) {
        //     lis.push(<li key={k}>商品名：{k} 数量：{this.props.cart[k]}</li>);
        // }
        this.props.cart.forEach((v, k) => {
            lis.push(<li key={k}>商品名：{k} 数量：{v}</li>);
        })
        return (
            <ul>
                {lis}
            </ul>
        )
    }
}