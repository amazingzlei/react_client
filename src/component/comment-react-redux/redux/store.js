import {createStore} from 'redux'
import {reducer} from './reducers'

// 创建store对象
var store = createStore(reducer)

// 暴露目标
export default store