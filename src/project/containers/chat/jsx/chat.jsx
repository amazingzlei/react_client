import React from 'react'
import {List, InputItem, NavBar, Grid,Icon} from 'antd-mobile';
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import {getChatUser, getMsgList} from '../../../redux/actions'

import '../../../assets/common.css'
import axios from "axios";


var ws = null;
var id = Cookies.get('id');
if ('WebSocket' in window) {
    ws = new WebSocket("ws://localhost:8090/react/webSocketOneToOne/"+id+",123");
}
/*
 *监听三种状态的变化js会回调
 */
ws.onopen = function (message) {
};
ws.onclose = function (message) {
};
//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function () {
    ws.close();
};

class Chat extends React.Component {

    state = {
        content: '',
        isShow: false, // 是否显示表情列表,
        user:null
    }

    // 在第一次render()之前回调
    componentWillMount () {
        // 初始化表情列表数据
        const emojis = ['😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀'
            ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
            ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
            ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣']
        this.emojis = emojis.map(emoji => ({text: emoji}))
    }

    // 发送信息
    sendMsg = ()=>{
        var message = this.state.content.trim();
        //用户id
        var from = Cookies.get('id');
        // 目标id
        var to = this.props.match.params.id;

        if(message){
            // 发送信息给后台
            ws.send(JSON.stringify({'message': message, 'role': to, 'socketId': "123", 'from': from}));
            this.setState({content:''})
            this.props.getMsgList(from,to)
        }
        this.setState({isShow:false})
    }

    // 修改内容
    changeValue = (value)=>{
        this.setState({content:value})
    }

    componentDidUpdate () {
        // 更新显示列表
        window.scrollTo(0, document.body.scrollHeight)
    }

    componentDidMount() {


        // 初始显示列表
        window.scrollTo(0, document.body.scrollHeight)

        var _this = this;
        // 获取信息列表
        var from = Cookies.get('id');
        // 目标id
        var to = this.props.match.params.id;
        this.props.getMsgList(from,to)
        ws.onmessage=function(ev){
            // 重新获取
            _this.props.getMsgList(from,to)
            console.log(ev.data);
        };

        axios.get('http://localhost:8090/react/getUserById',{params: {id: to}})
            .then(function (data) {
                if (data.data.code === 200) {
                    _this.setState({user:data.data.data});
                }
            })
    }

    // toggleShow = ()=>{
    //     var isShow = !this.state.isShow
    //     this.setState({isShow})
    //     if(isShow) {
    //         // 异步手动派发resize事件,解决表情列表显示的bug
    //         setTimeout(() => {
    //             window.dispatchEvent(new Event('resize'))
    //         }, 0)
    //     }
    // }

    render() {
        var from = Cookies.get('id');
        var msgList = this.props.msgList;
        console.log()
        return (
            <div id='chat-page'>
                <NavBar className='navbarClass sticky-header'
                        icon={<Icon type='left'/>} onClick={()=>this.props.history.goBack()}>消息</NavBar>
                <List style={{marginTop:50, marginBottom: 50}}>
                    {msgList.map((msg,index)=>{
                        if(msg.from===from){
                            return <List.Item key={index} className='chat-me' extra='我'>{msg.content}</List.Item>
                        }else{
                            return <List.Item key={index}
                                              thumb={this.state.user?this.state.user.info.img:null}>{msg.content}</List.Item>
                        }
                    })}
                </List>
                <div className='am-tab-bar'>
                    <InputItem
                        placeholder="请输入"
                        value={this.state.content}
                        onFocus={() => this.setState({isShow: false})}
                        onChange={(value)=>this.changeValue(value)}
                        extra={
                            <span>
                                {/*<span className='biaoqing' onClick={this.toggleShow}>😊</span>*/}
                                <span onClick={this.sendMsg}>发送</span>
                            </span>
                        }
                    />
                    {/*{this.state.isShow?<Grid data={this.emojis}*/}
                    {/*                         columnNum={8}*/}
                    {/*                         carouselMaxRow={4}*/}
                    {/*                         isCarousel={true}*/}
                    {/*                         onClick={(item) => {*/}
                    {/*                             return this.setState({content: this.state.content + item.text})*/}
                    {/*                         }}></Grid>:null}*/}
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({msgList:state.msgList}),
    {getMsgList,getChatUser}
)(Chat)