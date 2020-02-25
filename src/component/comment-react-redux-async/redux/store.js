import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

// 创建store对象
var store = createStore(
    reducers,
    applyMiddleware(thunk)
)

// 暴露目标
export default store