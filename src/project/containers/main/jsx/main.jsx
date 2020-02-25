import React from 'react'
import BossInfo from '../../boss-info/jsx/bossinfo'
import EmployeeInfo from '../../employee-info/jsx/employeeinfo'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {getUser} from '../../../redux/actions'
import Boss from "../../boss/jsx/boss";
import Emp from "../../emp/jsx/emp";
import Message from "../../message/jsx/message";
import Personal from "../../../personal/jsx/personal";
import {NavBar} from 'antd-mobile'
import Footer from "../../../components/footer/jsx/footer";
import Chat from '../../chat/jsx/chat'

import  '../../../assets/common.css'

class Main extends React.Component {

    componentDidMount() {
        const userid = Cookies.get('id')
        const id = this.props.state.id
        if (userid) {
            this.props.getUser(userid)
        }
    }

    getRedirectTo = (type, header)=> {
        let path
        // type
        if(type==='1') {
            path = '/emp'
        } else {
            path = '/boss'
        }
        // header
        if(!header) { // 没有值, 返回信息完善界面的path
            path += 'info'
        }
        return path
    }

    render() {

        // 给组件对象添加属性
        var navList = [ // 包含所有导航组件的相关信息数据
            {
                path: '/boss', // 路由路径
                component: Boss,
                title: '大神列表',
                icon: 'dashen',
                text: '求职者',
            },
            {
                path: '/emp', // 路由路径
                component: Emp,
                title: '老板列表',
                icon: 'laoban',
                text: '老板',
            },
            {
                path: '/message', // 路由路径
                component: Message,
                title: '消息列表',
                icon: 'message',
                text: '消息',
            },
            {
                path: '/personal', // 路由路径
                component: Personal,
                title: '用户中心',
                icon: 'personal',
                text: '个人',
            }
        ]

        const userid = Cookies.get('id')
        // 如果没有, 自动重定向到登陆界面
        if(!userid) {
            return <Redirect to='/login'/>
        }
        const loginUser = this.props.state
        // 如果user有没有_id, 返回null(不做任何显示)
        // debugger
        if(!loginUser.id) {
            return null
        } else {
            // 如果有_id, 显示对应的界面
            // 如果请求根路径, 根据user的type和header来计算出一个重定向的路由路径, 并自动重定向
            var path = this.props.location.pathname
            if(path==='/') {
                // 得到一个重定向的路由路径
                path = this.getRedirectTo(loginUser.type,loginUser.info)
                return <Redirect to= {path}/>
            }
        }

        // 获取当前路径
        var path = this.props.location.pathname;
        // 当前路径是否匹配navList中的元素
        var currentNav = navList.find((nav)=>nav.path===path);

        return (
            <div>
                {/*如果登录后不需要填写信息则显示主页面的导航*/}
                {currentNav ? <NavBar className='sticky-header navbarClass' user={loginUser}>{currentNav.title}</NavBar> : null}
                <Switch>
                    {/*注册boss、emp、message、personal*/}
                    {navList.map(function (nav,index) {
                        return  <Route key={index} path={nav.path} component={nav.component}/>
                    })}
                    <Route path='/bossinfo' component={BossInfo}/>
                    <Route path='/empinfo' component={EmployeeInfo}/>
                    <Route path='/chat/:id' component={Chat}/>
                </Switch>
                {currentNav ? <Footer navList={navList} type={loginUser.type}></Footer>:null}
            </div>
        )
    }
}

export default connect(
    state => ({state: state.loginUser}),
    {getUser}
)(Main)