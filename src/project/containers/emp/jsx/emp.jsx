import React from 'react'
import UserList from "../../user-list/jsx/userlist";
import {connect} from "react-redux";
import {getUserListAction} from "../../../redux/actions";

class Emp extends React.Component{

    componentDidMount () {
        // 获取获取userList
        this.props.getUserListAction('1')
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
)(Emp)
