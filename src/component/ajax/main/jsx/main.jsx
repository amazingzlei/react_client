import React, {Component} from 'react'
import axios from 'axios'
import '../../common/css/index.css'

export default class Main extends Component {

    state = {
        initView:true,
        loading:false,
        users:null,
        errorMsg:null,
    }

    // 接收父组件传值时发生改变
    componentWillReceiveProps(nextProps, nextContext) {
        var searchName = nextProps.searchName;
        if(searchName){
            // 更新状态
            this.setState({initView:false,
                loading:true})
            // 发送请求
            axios.get('https://api.github.com/search/users?q='+searchName)
                .then((data)=>{
                    console.log(data)
                    console.log(data.data.items)
                    var users = data.data.items.map((item)=>{
                        return {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
                    })
                    this.setState({users,loading:false})
                })
                .catch((error)=>{
                    this.setState({errorMsg:error.message})
                })
        }
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