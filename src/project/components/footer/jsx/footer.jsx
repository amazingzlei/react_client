import React from 'react'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'

class Footer extends React.Component{

    render() {
        var navList = this.props.navList;

        // 如果是boss，则出去emp，否则相反
        if(this.props.type==='1'){
            navList.splice(0,1)
        }else {
            navList.splice(1,1)
        }

        var path = this.props.location.pathname // 请求的path
        var _this = this;
        return(
            <TabBar>
                {navList.map(function (nav,index) {
                    return <TabBar.Item
                        key={index}
                        title={nav.title}
                        icon={{uri: require(`../images/${nav.icon}.png`)}}
                        selected={path===nav.path}
                        selectedIcon={{uri: require(`../images/${nav.icon}-selected.png`)}}
                        onPress={() => _this.props.history.replace(nav.path)}></TabBar.Item>
                })}
            </TabBar>
        )
    }
}

// 由于在非路由组件中无法使用history、location、match对象，因此需要withRouter包裹
export default withRouter(Footer)