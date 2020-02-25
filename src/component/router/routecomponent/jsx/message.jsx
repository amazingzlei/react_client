import React from "react";
import {NavLink,Route} from "react-router-dom";
import MessageDetail  from "./messagedetail";

export default class Message extends React.Component {

    state = {
        messageList:[

        ]
    }

    // 模拟发送ajax请求
    componentDidMount(){
        var messageList = [
            {id:1,title:'message001'},
            {id:2,title:'message002'},
            {id:3,title:'message003'},
        ]
        setTimeout(()=>{
            this.setState({messageList})
        },500)
    }


    render(){
        return (
            <div>
                <ul>
                    {this.state.messageList.map((message,index)=>{
                        return <li key={index}><NavLink to={'/home/message/messagedetail/'+message.id}>{message.title}</NavLink></li>
                    })}
                </ul>
                {/*使用:xx来站位*/}
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
            </div>
        )
    }
}