var  comments = [
        {username:'曹操',content:'宁可我负天下人，不可天下人负我'},
        {username:'赵匡胤',content:'天下的一切都是朕的'},
]

export  function reducer(state=comments,action){
    switch (action.type) {
        case 'add':
            return addComment(state,action);
        case 'delete':
            return delComment(state,action);
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