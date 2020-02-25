import React, {Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import '../../common/css/index.css'

export default class Main extends Component {

    state = {
        initView:true,
        loading:false,
        users:null,
        errorMsg:null,
    }

    // 接收父组件传值时发生改变
    componentDidMount() {
        var _this = this;
        // 订阅
        // 第一个参数为订阅名，第二个参数为回调函数，回调函数的两个参数分别为订阅名，这个与
        // 前面的重复，基本不会使用，第一个参数为订阅的参数
        PubSub.subscribe('changeSerachName',function (name, data) {
            console.log('订阅参数:()',data)
            if(data){
                // 更新状态
                _this.setState({initView:false,
                    loading:true})
                // 发送请求
                axios.get('https://api.github.com/search/users?q='+data)
                    .then((data)=>{
                        var users = data.data.items.map((item)=>{
                            return {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
                        })
                        _this.setState({users,loading:false})
                    })
                    .catch((error)=>{
                        _this.setState({errorMsg:error.message})
                    })
            }
        })


    }

    render() {

        // 这种写法相当于var initView = this.state.initView,是一种简写
        var {initView,loading,users,errorMsg} = this.state;

        if(initView){
            return <h2>请输入关键词搜索</h2>
        }else if(loading){
            return <h2>正在加载，请稍后...</h2>
        }else if(errorMsg!=null){
            return <h2>{errorMsg}</h2>
        }else{
            return (
                <div className="row">
                    {users.map((user,index)=>{
                        return (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width:100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}