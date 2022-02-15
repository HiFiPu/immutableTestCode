
import React, {Component} from "react";
import {connect} from "react-redux"
import { changeCity, changeCount } from "../../actions";
// @ 装饰器  装饰类 class

// @connect(
//     state=>{
//         return {
//             ...state
//         }
//     }
// )
@connect(
    state=>{
        console.log(state);
        return {
            data:state.get("data"),
            msg:state.getIn(['data',"msg"])
        }
    }
)
class Home extends Component{
    render(){
        console.log(this.props);
        const {
            data,
            dispatch,
            msg
        } = this.props;
        return (
            <div>
                <h2> Home - home - home </h2>
                <h2> city == {data.get("city")}</h2>
                <h2>count == { data.get("count") }</h2>
                <h2>msg === {msg}</h2>
                <button onClick={()=>dispatch(changeCity("希望武汉快快好起来"))} >  想去wuhan  </button>
                <button onClick={()=>dispatch(changeCount(14))} >  count add  </button>
                <button onClick={()=>dispatch({type:"deleteMsg"})}>删除 msg </button>

            </div>
        )
    }
}
export default Home