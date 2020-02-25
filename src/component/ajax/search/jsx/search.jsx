import React, {Component} from 'react'

export default class Search extends Component {

    changeSearchName = ()=>{
        this.props.changeSearchName(this.input.value);
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