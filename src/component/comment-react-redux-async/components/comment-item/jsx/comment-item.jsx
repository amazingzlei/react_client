import React from "react";
import '../css/comment-list.css'

export default class CommentItem extends React.Component{

    deleteComment = ()=>{
        if(window.confirm('确定删除'+this.props.comment.username+'的评论吗')){
            // 删除评论
            this.props.deleteComment(this.props.index)
        }
    }

    render() {
        return (

            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.deleteComment}>删除</a>
                </div>
                <p className="user"><span>{this.props.comment.username}</span><span>说:</span></p>
                <p className="centence">{this.props.comment.content}</p>
            </li>
        )
    }
}

