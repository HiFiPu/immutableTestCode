import { observer } from "mobx-react"
import React,{ useState,useEffect } from "react"
import { makeAutoObservable } from 'mobx';
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
    const [timer] = useState(() => new Timer()) // Timer的定义在上面（正如上面所说的那样这里我们忽略了更新方法的定义·译者注）。
    useEffect(() => {
        const handle = setInterval(() => {
            timer.increaseTimer()
        }, 1000)
        return () => {
            clearInterval(handle)
        }
    }, [timer])
    return <span>Seconds passed: {timer.secondsPassed}</span>
})


function index(props) {
   
    return (
        <div>
          <TimerView />  
        </div>
    );
}

export default index;