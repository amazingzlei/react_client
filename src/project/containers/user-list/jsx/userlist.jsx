import React from 'react'
import {WingBlank, WhiteSpace, Card} from "antd-mobile";
import {withRouter} from 'react-router-dom'

class UserList extends React.Component{

    render() {
        return(
            <WingBlank style={{marginBottom:50, marginTop:50}}>
                {this.props.userList.map((user,index)=>{
                    return (
                        <div key={index}>
                            <WhiteSpace />
                            <Card onClick={()=>this.props.history.push('/chat/'+user.id)}>
                                <Card.Header
                                    extra={user.username}
                                    thumb={user.info.img}></Card.Header>
                                <Card.Body>
                                    <div>职位:{user.info.job}</div>
                                    {user.info.company?<div>公司:{user.info.company}</div>:null}
                                    {user.info.salary?<div>月薪:{user.info.salary}</div>:null}
                                    <div>职位:{user.info.desc}</div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </WingBlank>
        )
    }
}
export default withRouter(UserList)