import React,{Component} from 'react'
import Search from '../../search/jsx/search'
import Main from '../../main/jsx/main'
import '../../common/css/index.css'

export default class App extends Component{

    render() {

        return (
            <div className="container">
                <Search />
                <Main />
            </div>
        )
    }
}