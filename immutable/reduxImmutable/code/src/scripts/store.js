
import {createStore } from "redux";
import { reducers } from "./reducers";


const store = createStore(reducers);   // callback ==> reducers; 

// const state  = store.getState();
// console.log(state);

export default store;