import React from 'react'
import {connect} from "react-redux";
import {getChatUser} from "../../../redux/actions";
import axios from "axios";
import Cookies from "js-cookie";
import {List, Badge} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

class Message extends React.Component{

    componentDidMount() {
        this.props.getChatUser(Cookies.get('id'))
    }

    render() {
        console.log(this.props.chatUsers)
        return (
            <List style={{marginTop:50, marginBottom: 50}}>

                {
                    this.props.chatUsers.map(user =>{
                        // 得到目标用户的id
                        const targetUserId = user.id
                        // 得到目标用户的信息
                        return (
                            <Item
                                key={user.id}
                                extra={<Badge text={user.count}/>}
                                thumb={user.info ? user.info.img : null}
                                arrow='horizontal'
                                onClick={() => this.props.history.push(`/chat/${targetUserId}`)}
                            >
                                {user.content}
                                <Brief>{user.username}</Brief>
                            </Item>
                        )
                    })
                }
            </List>
        )
    }
}
export default connect(
    state=>({chatUsers:state.chatUsers}),
    {getChatUser}
)(Message)