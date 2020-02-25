import React,{Component} from 'react'
import PubSub from 'pubsub-js'

import CommentAdd from "../../comment-add/jsx/comment-add";
import CommentList from "../../comment-list/jsx/comment-list";


export default class App extends Component{

    state = {
        comments:[
            {username:'曹操',content:'宁可我负天下人，不可天下人负我'},
            {username:'赵匡胤',content:'天下的一切都是朕的'},
        ]
    }

    componentDidMount() {
        var _this = this;
        // 订阅添加订阅
        PubSub.subscribe('add',function (name,data) {
            var comments = _this.state.comments;
            comments.unshift(data)
            _this.setState({comments})
        })

        // 订阅删除订阅
        PubSub.subscribe('delete',function (name,data) {
            var comments = _this.state.comments;
            comments.splice(data,1);
            _this.setState({comments})
        })
    }


    render() {

        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd />
                    <CommentList comments={this.state.comments} />
                </div>
            </div>
        )
    }
}