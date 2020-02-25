import {combineReducers} from 'redux'

var  comments = []

function reducer(state=comments,action){
    switch (action.type) {
        case 'add':
            return addComment(state,action);
        case 'delete':
            return delComment(state,action);
        case 'init':
            return initComments(state,action);
        default:
            return state
    }
}


function init(state=comments,action){
    switch (action.type) {
        case 'add':
            return addComment(state,action);
        case 'delete':
            return delComment(state,action);
        case 'init':
            return initComments(state,action);
        default:
            return state
    }
}


function addComment(state,action) {
    var newState = [...state];
    newState.unshift(action.data)
    return newState
}

function delComment(state,action) {
    var newState = [...state];
    newState.splice(action.data,1);
    return newState
}

function initComments() {
    comments = [
        {username:'曹操',content:'宁可我负天下人，不可天下人负我'},
        {username:'赵匡胤',content:'天下的一切都是朕的'}]
    return comments
}

// 如果reducer中有多个方法时怎么暴露
export default combineReducers({
    reducer,
    init
})