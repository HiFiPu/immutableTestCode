

// import {combineReducers} from "redux";
import {combineReducers} from "redux-immutable"
import { data } from "./data";


export const reducers = combineReducers({
    data:data
})