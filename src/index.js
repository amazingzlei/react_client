import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
// import App from './component/comment/app/jsx/app'
// import App from './component/ajax/app/jsx/app'
// import App from './component/ajax(发布订阅改写)/app/jsx/app'
// import App from './component/comment(发布订阅改写)/app/jsx/app'

// import App from './component/router/component/jsx/app'
// import App from './component/ant-design-ui/app'
// import App from './component/counter-react/app'

// redux开始
// 3.3引入store对象
//
// import App from './component/counter-redux/jsx/app'
// import store from './component/counter-redux/redux/store'
//
// function render(){
//     ReactDOM.render(
//         (
//             // 4.将store传递给组件
//             <BrowserRouter><App store={store}/></BrowserRouter>
//         ),
//         document.getElementById('root')
//     )
// }
//
// // 初始化执行
// render()
//
// // 这时候当state发生改变时，页面不能重新绘制，需要我们通过store对象的subscribe()方法来注册监听，
// // 当state发生改变时就可以实现自动刷新
// store.subscribe(function () {
//     console.log(store.getState())
//     ReactDOM.render(
//         (
//             <BrowserRouter><App store={store}/></BrowserRouter>
//         ),
//         document.getElementById('root')
//     )
// })
// redux结束

// react-redux开始

// import App from './component/counter-react-redux/containers/app'
// import store from './component/counter-react-redux/redux/store'
// import {Provider} from 'react-redux'
// ReactDOM.render(
//         (
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         ),
//         document.getElementById('root')
//     )

// react-redux结束


// comment-react-redux开始
// import Connect from './component/comment-react-redux/containers/connect'
// import store from './component/comment-react-redux/redux/store'
// import {Provider} from 'react-redux'
// ReactDOM.render(
//         (
//             //让所有组件都可以得到state数据和store对象
//             <Provider store={store}>
//                 <Connect />
//             </Provider>
//         ),
//         document.getElementById('root')
//     )
// comment-react-redux结束


// comment-react-redux-async开始
// import Connect from './component/comment-react-redux-async/containers/connect'
// import store from './component/comment-react-redux-async/redux/store'
// import {Provider} from 'react-redux'
// ReactDOM.render(
//     (
//         //让所有组件都可以得到state数据和store对象
//         <Provider store={store}>
//             <Connect />
//         </Provider>
//     ),
//     document.getElementById('root')
// )
// comment-react-redux-async结束


// 实战开始
import {Provider} from 'react-redux'
import store from './project/redux/store'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Register from './project/containers/register/jsx/register'
import Login from './project/containers/login/jsx/login'
import Main from './project/containers/main/jsx/main'
ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route component={Main}></Route> 默认路由
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'))
// 实战结束



