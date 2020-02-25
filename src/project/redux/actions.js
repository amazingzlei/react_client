import axios from "axios";

export var updateId = function (data) {
    return {type:'updateId', data:data}
}

var getUserById = function (data) {
    return {type:'getUser', data:data}
}

var getUsers = function (data) {
    return {type:'getUsers', data:data}
}

var getMsgListAction = function (data) {
    return {type:'getMsgList', data:data}
}

export var logout = function () {
    return {type:'logout', data:null}
}

export var getUser = function (id) {
    return function (dispatch) {
        const response = axios.get('http://localhost:8090/react/getUserById',{params: {id: id}})
            .then(function (data) {
                if (data.data.code === 200) {
                    dispatch(getUserById(data.data.data));
                }
            })
    }
}

export var getUserListAction = function (type) {
    if(type==='1'){
        return function (dispatch) {
            const response = axios.get('http://localhost:8090/react/getAllBoss')
                .then(function (data) {
                    if (data.data.code === 200) {
                        dispatch(getUsers(data.data.data));
                    }
                })
        }
    }else {
        return function (dispatch) {
            const response = axios.get('http://localhost:8090/react/getAllEmp')
                .then(function (data) {
                    if (data.data.code === 200) {
                        dispatch(getUsers(data.data.data));
                    }
                })
        }
    }
}

export var getMsgList = function (from,to) {
    return function (dispatch) {
        axios.get('http://localhost:8090/react/getMsgList',{params:{from:from,to:to}})
            .then(function (data) {
                if (data.data.code === 200) {
                    dispatch(getMsgListAction(data.data.data));
                }
            })
    }
}

var getChatUserAction = function (id) {
    return {type:'getChatUserAction',data:id}
}

export var getChatUser = function (id) {
    return function (dispatch) {
        axios.get('http://localhost:8090/react/getAllChatUser',{params: {id: id}})
            .then(function (data) {
                if (data.data.code === 200) {
                    dispatch(getChatUserAction(data.data.data))
                }
            })
    }
}