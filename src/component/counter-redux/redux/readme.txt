redux使用总结：
1.redux不是react的插件库，而是一个单独的库
2.redux的核心对象为store、reducer、action，
    2.1 其中store为管理对象，它维护state(状态)和reducer，通过getState()方法获取state，
        通过dispatch(action)分发action, 触发reducer调用, 产生新的state，
        通过subscribe(listener): 注册监听, 当产生了新的state时, 自动调用，listener是一个函数，
        返回新组件
    2.2 reducer是一个纯函数，它实际上为改变状态的函数，该函数需要两个需要两个参数，第一个参数为
        旧状态，即修改之前的状态，第二个参数为入参(可以不要)
        注意:reducer必须返回一个新的状态
    2.3 action是一个表示行为的对象，它包含两个属性，type和data，type为表示属性，值为字符串(可以这样理解
        该属性标识了实际上指的是一个函数名)，data为可选属性，表示需要传入的参数
3.redux使用步骤
    3.1综上所述，redux有三大核心对象，因此首先我们要创建三个js文件store.js、reducers.js、actions.js
    3.2在store.js中第一步为创建store对象，redux为我们提供了一个方法createStore(),但是这个方法需要我们通过
        import {createStore} from 'redux'方式去引入。此外该方法还需要传入一个状态，这个状态就是reducer.js中函数返回的状态，
        因此我们还需要引入reducer.js import {counter} from './reducers'。这样store对象就创建好了
    3.3在主入口(一般为index.js)中引入store import store from './component/counter-redux/redux/store'，
        然后再将store作为参数传给组件。
        注意:这时候当state发生改变时，页面不能重新绘制，需要我们通过store对象的subscribe()方法来注册监听，
        当state发生改变时就可以实现自动刷新
    3.4组件可以通过this.props.store.getState()方法获取state从而渲染页面
    3.5当组件想要修改state状态时，首先想到的是需要调用store的dispatch(action)方法，因此需要完成以下步骤
        3.5.1在action.js中创建能返回action对象的方法
        3.5.2在组件中引入action.js，并调用相关方法获取action对象
        3.5.3dispatch方法最终会交给reducer处理，因此需要我们在reducer.js中编写相应的业务逻辑
