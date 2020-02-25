export var addComment = function (comment) {
    return {type:'add',data:comment}
}

export var deleteComment = function (index) {
    return {type:'delete',data:index}
}