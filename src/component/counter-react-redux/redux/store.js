/**
 * 该文件用于创建store对象
 */
// 引入store对象
import {createStore} from 'redux'
// 引入reducer
import {counter} from './reducers'

// 3.2.创建store对象,同时需要传入一个reducer参数
var store = createStore(counter)

console.log(store)

// 暴露store对象
export default store