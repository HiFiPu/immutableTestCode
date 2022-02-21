import { observer } from "mobx-react"
import { observable } from "mobx"
import React,{ useState } from "react"

const TimerView = observer(() => {
    const [timer] = useState(() =>
        observable({
            secondsPassed: 0,
            increaseTimer() {
                this.secondsPassed++
            }
        })
    )
    return <span>Seconds passed: {timer.secondsPassed}</span>
})


function indexw(props) {
    return (
        <div>
            <TimerView />
        </div>
    );
}

export default indexw;