import React from "react";
import {NavLink,Switch,Route,Redirect} from "react-router-dom";
import News from './news'
import Message from './message'

import '../../common/app.css'

export default class Home extends React.Component {
    render(){
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li><NavLink to='/home/news' activeClassName="activeClass">news</NavLink></li>
                    <li><NavLink to='/home/message' activeClassName="activeClass">message</NavLink></li>
                </ul>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        )
    }
}