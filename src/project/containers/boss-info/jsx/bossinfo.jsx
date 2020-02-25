import React from 'react'
import {
    NavBar, InputItem, Button, Toast
} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import HeaderSelector from '../../../components/header/jsx/headerselector'
import 'antd-mobile/dist/antd-mobile.css';
import '../../../assets/common.css';
import {connect} from "react-redux";
import axios from 'axios'
import Cookies from "js-cookie";

class BossInfo extends React.Component {

    state = {
        img:'',
        job:'',
        company:'',
        salary:'',
        desc:'',
    }

    changeImg = (el)=>{
        var img = el.icon;
        this.setState({img})
    };

    changeJob = (value)=>{
        this.setState({job:value})
    };

    changeCompany = (value)=>{
        this.setState({company:value})
    };

    changeSalary = (value)=>{
        this.setState({salary:value})
    };

    changeDesc = (value)=>{
        this.setState({desc:value})
    };

    updateUser = ()=>{
        var _this = this;
        if(!Cookies.get('id')){
            this.props.history.replace('/login');
        }else {
            if(this.state.img&&this.state.company&&this.state.job&&this.state.salary&&this.state.desc){
                axios.post('http://localhost:8090/react/updateBoss',{...this.state,id:Cookies.get('id')}).then(function (data) {
                    if(data.data.code===200){
                        _this.props.history.replace('/boss');
                        console.log('更新boss成功');
                    }else {
                        Toast.fail(data.data.msg);
                    }
                }).catch(function (error) {
                    Toast.fail(error.message);
                })
            }else {
                Toast.fail("请输入必要信息!");
            }
        }
    };

    render() {

        if(!Cookies.get('id')||Cookies.get('type')!='2'){
            return <Redirect to='/login' />
        }

        return (
            <div>
                <NavBar className='navbarClass'>Boss信息完善</NavBar>
                <HeaderSelector changeImg={this.changeImg} img={this.state.img}></HeaderSelector>
                <InputItem onChange={this.changeJob}>招聘职位:</InputItem>
                <InputItem onChange={this.changeCompany}>公司名称:</InputItem>
                <InputItem onChange={this.changeSalary}>职位薪资:</InputItem>
                <InputItem onChange={this.changeDesc}>职位要求:</InputItem>
                <Button className='navbarClass' onClick={this.updateUser}>保存</Button>
            </div>
        )
    }
}
export default connect(
    state =>({state})
)(BossInfo)