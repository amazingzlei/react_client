import React from "react";

export default class News extends React.Component {

    state = {
        newsList:['news01','news02','news03']
    }

    render(){
        return (
            <ul>
                {this.state.newsList.map((news,index)=>{
                    return <li key={index}>{news}</li>
                })}
            </ul>
        )
    }
}