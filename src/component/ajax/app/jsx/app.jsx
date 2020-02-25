import React,{Component} from 'react'
import Search from '../../search/jsx/search'
import Main from '../../main/jsx/main'
import '../../common/css/index.css'

export default class App extends Component{

    state = {
        searchName: ''
    }

    // 修改搜索内容
    changeSearchName = (searchName)=>{
        var searchName = searchName;
        this.setState({searchName})
    }

    render() {

        return (
            <div className="container">
                <Search changeSearchName={this.changeSearchName}/>
                <Main searchName={this.state.searchName}/>
            </div>
        )
    }
}