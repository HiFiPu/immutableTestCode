import React , {Component} from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import Guide from "./guide"
import Home  from "./home"

export default class MainLayout extends Component {
    render(){
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact render={()=>(<Redirect to="/guide" /> )}  />
                    <Route path="/guide" component={Guide} />
                    <Route path="/home" component={Home} />
                    <Route render={()=>(<Redirect to="/guide" /> )} />
                </Switch>  
            </div>
        )
    }
}