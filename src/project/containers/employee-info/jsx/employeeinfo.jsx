import React from 'react'
import {
    NavBar, InputItem, Button, Toast
} from 'antd-mobile'

import HeaderSelector from '../../../components/header/jsx/headerselector'
import 'antd-mobile/dist/antd-mobile.css';
import '../../../assets/common.css';
import {connect} from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import {Redirect} from 'react-router-dom'

class EmployeeInfo extends React.Component {

    state = {
        id: '',
        img: '',
        job: '',
        desc: ''
    }

    componentDidMount() {
        this.setState({id: this.props.state.user.id})
    }

    changeImg = (el) => {
        var img = el.icon;
        this.setState({img})
    }

    changeJob = (value) => {
        this.setState({job: value})
    };

    changeDesc = (value) => {
        this.setState({desc: value})
    };

    updateUser = () => {
        var _this = this;
        if (!Cookies.get('id')) {
            this.props.history.replace('/login');
        } else {
            if (this.state.img && this.state.job && this.state.desc) {
                axios.post('http://localhost:8090/react/updateEmp', {...this.state,id:Cookies.get('id')}).then(function (data) {
                    if (data.data.code === 200) {
                        _this.props.history.replace('/emp')
                        console.log('更新大神成功')
                    } else {
                        Toast.fail(data.data.msg)
                    }
                }).catch(function (error) {
                    Toast.fail(error.message)
                })
            } else {
                Toast.fail("请输入必要信息!")
            }
        }
    }


    render() {
        if(!Cookies.get('id')||Cookies.get('type')!='1'){
            return <Redirect to='/login' />
        }

        return (
            <div>
                <NavBar className='navbarClass'>求职者信息完善</NavBar>
                <HeaderSelector changeImg={this.changeImg} img={this.state.img}></HeaderSelector>
                <InputItem onChange={this.changeJob}>求职岗位:</InputItem>
                <InputItem onChange={this.changeDesc}>个人介绍:</InputItem>
                <Button className='navbarClass' onClick={this.updateUser}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({state})
)(EmployeeInfo)