import React , {Component} from "react"; 
import {
    HashRouter as Hash,
    Route 
} from "react-router-dom"

import MainLayout from "./views";
import store from "./store"
import {Provider} from "react-redux"

export default class MainRouter extends Component{
    render(){
        return ( 
            <Provider store={store} >
                <Hash>
                    <Route component={MainLayout} ></Route>
                </Hash>
            </Provider>
        )
    }
}
