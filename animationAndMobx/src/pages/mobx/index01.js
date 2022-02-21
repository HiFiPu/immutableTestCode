import React from 'react';
import { makeAutoObservable, observable,action  } from 'mobx';
import { observer } from 'mobx-react';

class Timer {
  // secondsPassed = observable(0);
  // urlName = observable('https://baidu.com');
  objData = observable({
    secondsPassed:0,
    urlName:'https://baidu.com'
  })
  increaseTimer() {
    this.objData.secondsPassed += 1;
  }
  handleChange() {
    this.objData.urlName = 'https://alibaba.com';
  }
}
// class Timer {
//   secondsPassed = 0;
//   urlName = 'https://baidu.com';
//   constructor() {
//     makeAutoObservable(this);
//   }

//   increaseTimer() {
//     console.log(this,'this....')
//     this.secondsPassed += 1;
//   }

//   handleChange() {
//       this.urlName = 'https://alibaba.com'
//   }
// }

//被`observer`包裹的函数式组件会被监听在它每一次调用前发生的任何变化

const TimerView = observer(({ timer }) => (
  <h1>
    <span>Seconds passed: {timer.secondsPassed}</span>
    <p>{timer.urlName}</p>
  </h1>
));

function index(props) {
  const myTimer = new Timer();
  setInterval(() => {
    myTimer.increaseTimer();
  }, 1000);
  console.log(myTimer,'timmer....')
  return (
    <div>
       <TimerView timer={myTimer.objData} />
      {/* <TimerView timer={myTimer} /> */}
      <button onClick={() => myTimer.handleChange()}>按钮</button>
    </div>
  );
}

export default index;
