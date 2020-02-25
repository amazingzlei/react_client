import React from 'react'
import { Button } from 'antd-mobile';

import 'antd-mobile/dist/antd-mobile.css';

export default class App extends React.Component{

    state = {
        count: 0
    }

    add = ()=>{
        var value = this.select.value*1;
        var count = this.state.count;
        this.setState({
            count:value+count
        })
    }

    des = ()=>{
        var value = this.select.value*1;
        var count = this.state.count;
        this.setState({
            count:count-value
        })
    }

    addIfEven = ()=>{
        var value = this.select.value*1;
        var count = this.state.count;
        if(count%2==0){
            this.setState({
                count:count+value
            })
        }
    }

    asyAdd = ()=>{
        var value = this.select.value*1;
        var count = this.state.count;
        setTimeout(()=>{
            this.setState({
                count:count+value
            })
        },1000)
    }

    render() {
        return (
            <div>
                <h2>click {this.state.count} times</h2>
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