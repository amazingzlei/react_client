import React from "react";
// 引入组件
import { Button,Toast } from 'antd-mobile';

// 引入样式
import 'antd-mobile/dist/antd-mobile.css';

export default class App extends React.Component{

    click = ()=>{
        Toast.success('提交成功')
    }

    render(){
        return (
            <div>
                <Button type="primary"  onClick={this.click}>提交</Button>
            </div>
        );
    }
}