import React,{Component} from 'react'
import CommentAdd from "../../comment-add/jsx/comment-add";
import CommentList from "../../comment-list/jsx/comment-list";

export default class App extends Component{

    componentDidMount() {
        this.props.getComments();
    }

    render() {

        var comments = this.props.state
        console.log(comments)
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
                    <CommentAdd addComment={this.props.addComment}/>
                    <CommentList comments={comments} deleteComment={this.props.deleteComment}/>
                </div>
            </div>
        )
    }
}