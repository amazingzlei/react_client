export var addComment = function (comment) {
    return {type:'add',data:comment}
}

export var deleteComment = function (index) {
    return {type:'delete',data:index}
}

var initComments = function () {
    return {type:'init'}
}

export var getComments = function () {
    return function (dispatch) {
        // 分发给同步的action
        setTimeout(function () {
            dispatch(initComments());
        },2000)
    }
}