import {combineReducers} from 'redux'

var userInfo = {
    id:''
}

var loginUserInfo = {
}

var userList = []

function user(state=userInfo,action) {
    if(action.type==='updateId'){
        var userInfo = {...state}
        userInfo.id = action.data;
        return userInfo
    }else {
        return state
    }
}

function loginUser(state=loginUserInfo,action) {
    if(action.type==='getUser'){
        var loginUserInfo = {...action.data}
        return loginUserInfo
    }else if(action.type==='logout'){
        return {...loginUserInfo}
    }else {
        return state
    }
}

function getUserList(state=userList,action) {
    if(action.type==='getUsers'){
        var userList = [...action.data];
        return userList
    }else {
        return state
    }
}

var msgListInfo=[]
function msgList(state=msgListInfo,action) {
    if(action.type=='getMsgList'){
        var msgListInfo = [...action.data];
        return msgListInfo
    }else{
        return state;
    }
}

var chatUserInfo = []
function chatUsers(state=chatUserInfo,action){
    if(action.type=='getChatUserAction'){
        var chatUserInfo = [...action.data];
        return chatUserInfo
    }else{
        return state;
    }
}


export default combineReducers({
    loginUser,user,getUserList,msgList,chatUsers
})