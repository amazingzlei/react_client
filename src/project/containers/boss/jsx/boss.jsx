import React from 'react'
import UserList from "../../user-list/jsx/userlist";
import {connect} from "react-redux";
import {getUserListAction} from "../../../redux/actions";

class Boss extends React.Component{

    componentDidMount () {
        // 获取获取userList
        this.props.getUserListAction('2')
    }
    render () {
        return (
            <UserList userList={this.props.userList}/>
        )
    }
}

export default connect(
    state => ({userList: state.getUserList,user:state.loginUser}),
    {getUserListAction}
)(Boss)
