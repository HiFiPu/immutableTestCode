import React, { Component } from 'react';
import {connect} from 'react-redux';

class InputBar extends Component {
    save = () => {
        const goods_name = this.refs.goods_name.value;
        const count = this.refs.count.value;
        this.props.saveToCart({
            goods_name,
            count
        })
    }
    render() {
        return (
            <div>
                商品：<input type="text" ref="goods_name" /> <br />
                数量：<input type="number" ref="count" /> <br />
                <button onClick={this.save}>保存</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    saveToCart: function(json) {
        dispatch({
            type: "SAVE_TO_CART",
            payload: json
        })
    }
})

export default connect(null, mapDispatchToProps)(InputBar);