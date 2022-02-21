import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import storeData from './store/index';
import App from './store/app';
export default class index extends Component {
  render() {
    const store = new storeData();
    console.log(store,'new storeData()')
    return (
      <Provider store={store}>
        <App></App>
      </Provider>
    );
  }
}
