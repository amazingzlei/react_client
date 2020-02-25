import React from "react";
import About from "../../routecomponent/jsx/about"
import Home from "../../routecomponent/jsx/home"
import {NavLink,Switch,Route,Redirect} from "react-router-dom";
import axios from 'axios'

import '../../common/app.css'

let $axios = axios.create({
    baseURL: 'http://localhost:8090/react/',
    timeout: 10000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
});


export default class App extends React.Component {

    componentDidMount(){
        $axios.get('/getCar').then((data)=>{
            var cars = data.data.data;
            console.log(cars)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 通过activeClassName属性设置自定义样式*/}
                            <NavLink className="list-group-item"  to="/about" activeClassName="activeClass">About</NavLink>
                            <NavLink className="list-group-item"  to="/home" activeClassName="activeClass">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*路由坑*/}
                                <Switch>
                                    <Route path='/about' component={About} />
                                    <Route path='/home' component={Home} />
                                    <Redirect to='/about' />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}