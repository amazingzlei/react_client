import React from "react";

export default class CommentAdd extends React.Component{

    state = {
        username:'',
        content:''
    }

    // 提交
    doSub = ()=>{
        this.props.addComment(this.state)
        this.setState({
            username:'',
            content:''
        })
    }

    // 修改用户名
    handlerNameChange = (event)=>{
        var username = event.target.value;
        this.setState({
            username
        })
    }

    // 修改密码
    handlerValueChange = (event)=>{
        var content = event.target.value;
        this.setState({
            content
        })
    }

    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                               value={this.state.username} onChange={this.handlerNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                                  value={this.state.content} onChange={this.handlerValueChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right"
                                    onClick={this.doSub}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}