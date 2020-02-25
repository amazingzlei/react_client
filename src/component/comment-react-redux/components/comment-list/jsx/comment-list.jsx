import React from "react";
import CommentItem from "../../comment-item/jsx/comment-item";
import '../css/comment-list.css'

export default class CommentList extends React.Component{
    render() {

        var deleteComment = this.props.deleteComment;
        var display = this.props.comments.length==0?'':'none'

        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {this.props.comments.map(function (comment,index) {
                        return <CommentItem comment={comment} key={index} index={index} deleteComment={deleteComment}/>
                    })}
                </ul>
            </div>
        )
    }
}