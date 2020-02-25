import React from 'react'
import { Button } from 'antd-mobile';
import axios from 'axios'


import 'antd-mobile/dist/antd-mobile.css';

export default class Counter extends React.Component{

    add = ()=>{
        var value = this.select.value*1;
        this.props.add(value)
    }

    des = ()=>{
        var value = this.select.value*1;
        this.props.dec(value)
    }

    addIfEven = ()=>{
        var value = this.select.value*1;
        var count = this.props.state.count;
        if(count%2==0){
            this.props.add(value)
        }
    }

    asyAdd = ()=>{
        var value = this.select.value*1;
        setTimeout(()=>{
            axios.get('http://localhost:8090/react/getCar').then((data)=>{
                var cars = data.data.data;
                console.log(cars)
            }).catch((error)=>{
                alert(error.message)
            })
            this.props.add(value)
        },1000)
    }

    render() {
        var {count} = this.props.state;
        console.log(this.props.state)
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