import {observer} from 'mobx-react'
import React,{createContext, useContext} from "react"
import { makeAutoObservable } from 'mobx';
const TimerContext = createContext()
class Timer {
    secondsPassed = 0;
    urlName = 'https://baidu.com';
    constructor() {
      makeAutoObservable(this);
    }
  
    increaseTimer() {
        // console.log(this,'this....')
      this.secondsPassed += 1;
    }
  
    handleChange() {
        this.urlName = 'https://alibaba.com'
    }
  }
const TimerView = observer(() => {
    // 从context中获取timer.
    const timer = useContext(TimerContext) // 可以在上面查看 Timer的定义。
    // console.log(timer,'timmer....')
    return (
        <span>Seconds passed: {timer.secondsPassed}</span>
    )
})

function index(props) {
    const myTimer = new Timer();
    setInterval(() => {
      myTimer.increaseTimer();
    }, 1000);
    return (
        <div>
             <TimerContext.Provider value={myTimer}>
                    <TimerView />
             </TimerContext.Provider>
        </div>
    );
}

export default index;