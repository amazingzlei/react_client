import React from 'react'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button,
    Toast
} from 'antd-mobile'

import Logo from '../../../components/logo/jsx/logo'
import axios from 'axios'

import 'antd-mobile/dist/antd-mobile.css';
import '../../../assets/common.css';
import {connect} from "react-redux";
import {updateId} from '../../../redux/actions'
import Cookies from "js-cookie";

class Register extends React.Component{

    state = {
        username: '',  // 用户名
        password: '',  // 密码
        confirmpwd: '',  // 确认密码
        type: '1',  // 用户类型名称   1 表示大神/2表示老板
    }

    register = ()=>{
        var _this = this;
        if(this.state.password!=this.state.confirmpwd){
            Toast.fail('两次密码不一致!');
        }else{
            axios.post(
                'http://localhost:8090/react/register',
                {username:this.state.username,password:this.state.password,type:this.state.type})
                .then(function (data) {
                    if(data.data.code===200){
                        Cookies.set('id',data.data.data.id,{ expires: 1 })
                        Cookies.set('type',data.data.data.type,{ expires: 1 })
                        if(_this.state.type=='1'){
                            _this.props.history.replace('/empinfo');
                        }else {
                            _this.props.history.replace('/bossinfo');
                        }
                    }else{
                        Toast.fail(data.data.msg);
                    }
                })
                .catch(function (error) {
                    Toast.fail('注册失败!');
                })
        }
    }

    // 改变用户名
    changeUsername = (value)=>{
        this.setState({username:value})
    }

    // 改变密码
    changePassword = (value)=>{
        this.setState({password:value})
    }

    // 改变确认密码
    changeConfirmPwd = (value)=>{
        this.setState({confirmpwd:value})
    }

    // 修改类型
    changeType = (value)=>{
        this.setState({type:value})
    }

    // 切换登录组件
    toLogin = ()=>{
        this.props.history.replace('/login')
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
                    <InputItem placeholder='请输入确认密码' type="password" onChange={(value)=>this.changeConfirmPwd(value)}>确认密码:</InputItem>
                    <WhiteSpace/>
                    <List.Item>
                        <span>用户类型:</span>
                        &nbsp;&nbsp;&nbsp;
                        <Radio name='type' checked={this.state.type==='1'} onChange={()=>this.changeType('1')}>大神</Radio>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio name='type' checked={this.state.type==='2'} onChange={()=>this.changeType('2')}>老板</Radio>
                    </List.Item>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register} className='navbarClass'>注&nbsp;&nbsp;&nbsp;册</Button>
                    <WhiteSpace/>
                    <Button onClick={this.toLogin}>已有账户</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state =>({state}),
    {updateId}
)(Register)