

import immutable from "immutable"

const defaultState = immutable.fromJS({
    count:25,
    list:[],
    city:"大武汉",
    banner:[],
    msg:"wuhan-daydayup"
})

// Map
export const data = (state =  defaultState,action)=>{
    switch(action.type){

        case "changeCity":
        // return {...state,city:action.payload};
        return state.set("city",action.payload);
        break;

        case "changeCount":
        // return {...state,count:state.count+action.payload};
        // var state = state.toJS();
        // state.count+=action.payload;
        // return immutable.fromJS(state);
        // return state.set("count",state.get("count")+action.payload);
        return state.update("count",x=>x+action.payload);
        break;

        case "deleteMsg":
        return state.delete("msg")
        break;



        default:
            return state;
        break;
    }
}