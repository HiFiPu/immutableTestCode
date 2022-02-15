import React , {Component} from "react"
import store from "../../store"
import {connect} from "react-redux";


class Guide extends Component{
    render(){
        const {data} = store.getState();
        console.log(this.props);
        const {
            count 
        } = this.props.data;
        return (
            <div>
                <h2> guide - guide </h2>
                <h2>count === {data.count}  ---- {count}</h2>
            </div>
        )
    }
}


export default connect(
    state=>{
        return {
            ...state
        }
    }
)(Guide)