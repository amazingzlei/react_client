import React from "react";

var messageList = [
    {id:1,title:'message001',content:'加油，中国!'},
    {id:2,title:'message002',content:'加油，武汉!'},
    {id:3,title:'message003',content:'加油，世界!'},
]

export default class MessageDetail extends React.Component {

    render(){
        // 获取父组件传过来的参数
        console.log(this.props.match)
        var id = this.props.match.params.id;
        var message = messageList.find((m)=>m.id==id)

        return (
            <ul>
                <li>{message.id}</li>
                <li>{message.title}</li>
                <li>{message.content}</li>
            </ul>
        )
    }
}