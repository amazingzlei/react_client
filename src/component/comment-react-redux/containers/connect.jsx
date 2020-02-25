import App from '../components/app/jsx/app'
import {connect} from 'react-redux'

import {addComment,deleteComment} from '../redux/action'

export default connect(
    // state为外部的state数据
    function (state) {
        return {state:state}
    },
    {addComment,deleteComment}
)(App)

//connect()用于包装 UI 组件生成容器组件
// import { connect } from 'react-redux'
//   connect(
//     mapStateToprops,
//     mapDispatchToProps
//   )(Counter)

//mapStateToprops()，最终返回的是一个函数
// 将外部的数据（即state对象）转换为UI组件的标签属性
//   const mapStateToprops = function (state) {
//    return {
//      value: state
//    }
//   }
// mapDispatchToProps()
// 将分发action的函数转换为UI组件的标签属性
// 简洁语法可以直接指定为actions对象或包含多个action方法的对象