import React from 'react'
import {
    NavBar,
    WingBlank,
    InputItem,
    WhiteSpace,
    Button,
    Toast
} from 'antd-mobile'

import Logo from '../../../components/logo/jsx/logo'
import axios from 'axios'
import Cookies from 'js-cookie'
import {connect} from "react-redux";
import {updateId} from "../../../redux/actions";


import 'antd-mobile/dist/antd-mobile.css';
import '../../../assets/common.css';

class Login extends React.Component{

    state = {
        username: '',  // 用户名
        password: '',  // 密码
    }

    // 改变用户名
    changeUsername = (value)=>{
        this.setState({username:value})
    }

    // 改变密码
    changePassword = (value)=>{
        this.setState({password:value})
    }

    // 切换注册组件
    toRegister = ()=>{
        this.props.history.replace('/register')
    }

    // 登录
    login = ()=>{
        var _this = this;
        axios.post(
            'http://localhost:8090/react/userLogin',
            {username:this.state.username,password:this.state.password})
            .then(function (data) {
                if(data.data.code===200){
                    var user = data.data.data;
                    // 将用户的id放入cookie中
                    Cookies.set('id',user.id,{ expires: 1 })
                    Cookies.set('type',user.type,{ expires: 1 })
                    var type = user.type;

                    // 判断用户是否已经完善信息，如果没有则完善
                    if(user.info===null){
                        if('1'===type){
                            _this.props.history.replace('/empinfo');
                        }else{
                            _this.props.history.replace('/bossinfo');
                        }
                    }else {
                        // 如果已经完善信息，则跳转对应的页面
                        if('1'===type){
                            _this.props.history.replace('/emp');
                        }else{
                            _this.props.history.replace('/boss');
                        }
                    }
                }else{
                    Toast.fail(data.data.msg);
                }
            })
    }


    render() {
        return(
            <div>
                <NavBar className='navbarClass'>R&nbsp;e&nbsp;a&nbsp;c&nbsp;t&nbsp;招&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    <WhiteSpace/>
                    <InputItem placeholder='请输入用户名' onChange={(value)=>this.changeUsername(value)}>用户名:</InputItem>
                    <WhiteSpace/>
                    <InputItem placeholder='请输入密码' type="password" onChange={(value)=>this.changePassword(value)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.login} className='navbarClass'>登&nbsp;&nbsp;&nbsp;陆</Button>
                    <WhiteSpace/>
                    <Button onClick={this.toRegister}>还没有账户</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state =>({state}),
    {updateId}
)(Login)