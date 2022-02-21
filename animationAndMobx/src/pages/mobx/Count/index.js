// CountView.js

import { observer, inject } from 'mobx-react';

function Count({ countState }) {
  console.log('执行countState了');
  return (
    <div>
      <h3>1、Mobx + React + countState</h3>
      <button onClick={() => countState.increment()}>+1</button>
      <button onClick={() => countState.decrement()}>-1</button>
      <div>count: {countState.count}</div>
      <div>double: {countState.double}</div>
    </div>
  );
}

export const CountView = inject('countState')(observer(Count));