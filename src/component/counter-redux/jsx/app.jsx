import React from 'react'
import { Button } from 'antd-mobile';
// 3.5.3在组件中引入action.js，并调用相关方法获取action对象
import * as actions from '../redux/actions'

import 'antd-mobile/dist/antd-mobile.css';

export default class App extends React.Component{

    add = ()=>{
        var value = this.select.value*1;
        // 3.5调用dispatch分发任务
        this.props.store.dispatch(actions.add(value))
    }

    des = ()=>{
        var value = this.select.value*1;
        this.props.store.dispatch(actions.dec(value))
    }

    addIfEven = ()=>{
        var value = this.select.value*1;
        // 3.4通过this.props.store.getState()方法获取state
        var count = this.props.store.getState().count;
        if(count%2==0){
            this.props.store.dispatch(actions.add(value))
        }
    }

    asyAdd = ()=>{
        var value = this.select.value*1;
        setTimeout(()=>{
            this.props.store.dispatch(actions.add(value))
        },1000)
    }

    render() {
        var count = this.props.store.getState().count;

        return (
            <div>
                <h2>click {count} times</h2>
                <select ref={select=>this.select=select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <Button inline='true' onClick={this.add}>+</Button>
                <Button inline='true' onClick={this.des}>-</Button>
                <Button inline='true' onClick={this.addIfEven}>偶数时加</Button>
                <Button inline='true' onClick={this.asyAdd}>延时加</Button>
            </div>
        )
    }
}