// reducer实际上是一个纯函数，它需要两个参数，原始state和action，action是一个对象
// 该对象包括两个属性type和data,reducer最终必须返回一个新对象，因为react不能直接改变
// state的值


// 3.5.3在reducer.js中编写相应的业务逻辑
var initState = {
    count:10,
    number:'1'
}

export function counter(state=initState,action) {
    switch (action.type) {
        case 'add':
            return add(state,action.data);
            // return state + action.data
        case 'dec':
            return dec(state,action.data)
            // return state - action.data
        default:
            return state
    }
}

function add(state,data) {
    initState.count = state.count+data ;
    return Object.assign({}, initState)
}

function dec(state,data) {
    var initState = {...state}
    initState.count = state.count-data ;
    return initState
}