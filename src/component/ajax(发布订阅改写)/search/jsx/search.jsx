import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    changeSearchName = ()=>{
        // 发布消息
        // 第一个参数为发布的名称，第二个参数为数据
        PubSub.publish('changeSerachName',this.input.value)
    }

    render() {

        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="请输入内容" ref={input=>this.input=input}/>
                    <button onClick={this.changeSearchName}>Search</button>
                </div>
            </section>
        )
    }
}