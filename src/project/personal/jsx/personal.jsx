import React from 'react'
import {Result, List, WhiteSpace, Button, Modal} from 'antd-mobile';
import {connect} from "react-redux";
import Cookies from 'js-cookie'
import {logout} from '../../redux/actions'

class Personal extends React.Component{

    handlerLogout = ()=>{
        Modal.alert('退出', <div>确认退出登录吗?</div>, [
            { text: '取消'},
            { text: '确认', onPress: () =>
                {
                    Cookies.remove('id');
                    Cookies.remove('type');
                    this.props.logout();
                }
            },
        ])
    }

    render() {
        var user = this.props.state;

        return(
            <div style={{marginBottom:50, marginTop:50}}>
                <Result
                    imgUrl ={user.info.img}
                    title={user.username}
                    message={user.type==='2'? user.info.company:null}></Result>
                <List renderHeader='相关内容'>
                    <List.Item multipleLine>
                        <List.Item.Brief>职位: {user.info.job}</List.Item.Brief>
                        <List.Item.Brief>简介: {user.info.desc}</List.Item.Brief>
                        {user.info.salary ? <List.Item.Brief>薪资: {user.info.salary}</List.Item.Brief> : null}
                    </List.Item>
                </List>
                <WhiteSpace/>

                <Button type='warning' onClick={this.handlerLogout}>退出登录</Button>
            </div>
        )
    }
}
export default connect(
    state => ({state: state.loginUser}),
    {logout}
)(Personal)