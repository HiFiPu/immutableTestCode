import React, { Component } from 'react';
import {observer,inject} from "mobx-react"
@inject("store")
@observer
export default class app extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div>
          我是demo
          <button
            onClick={() => {
              this.props.store.Reduce();
            }}
          >
            减
          </button>
          默认的数量为{this.props.store.num}
          <button
            onClick={() => {
                console.log(this.props.store,'......')
              this.props.store.Add();
            }}
          >
            加
          </button>
        </div>
      </div>
    );
  }
}
