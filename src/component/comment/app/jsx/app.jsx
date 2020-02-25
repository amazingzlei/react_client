import React,{Component} from 'react'
import CommentAdd from "../../comment-add/jsx/comment-add";
import CommentList from "../../comment-list/jsx/comment-list";

export default class App extends Component{

    state = {
        comments:[
            {username:'曹操',content:'宁可我负天下人，不可天下人负我'},
            {username:'赵匡胤',content:'天下的一切都是朕的'},
        ]
    }

    // 添加评论
    addComment = (comment)=>{
        var comments = this.state.comments;
        comments.unshift(comment)
        this.setState({comments})
    }

    // 删除评论
    deleteComment = (index)=>{
        var comments = this.state.comments;
        comments.splice(index,1);
        this.setState({comments})
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
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        )
    }
}