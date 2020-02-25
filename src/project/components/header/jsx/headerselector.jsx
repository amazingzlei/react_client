import React from 'react'
import {
    List,Grid
} from 'antd-mobile'

import 'antd-mobile/dist/antd-mobile.css';
import '../../../assets/common.css';

export default class HeaderSelector extends React.Component{

    state = {
        imgList:[]
    }

    componentDidMount() {
        var imgList = []
        for(var i = 0; i < 20; i++){
            imgList.push({
                text: '头像'+(i+1),
                icon: require(`../../../../../public/common/images/头像${i+1}.png`) // 不能使用import
            })
        }
        this.setState({imgList})
    }

    changeImg = (el,index)=>{
        this.props.changeImg(el)
    }

    render() {
        var img = this.props.img
        var listHeader = !img ? '请选择头像' : (
            <div style={{fontSize:14}}>
                <span>已选择头像:</span>
                <img src={img} className='headerImg'/>
            </div>
        )
        return (
            <List renderHeader={()=>listHeader}>
                <Grid data={this.state.imgList} columnNum={5} onClick={this.changeImg}></Grid>
            </List>
        )
    }
}
