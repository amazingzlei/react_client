import React from 'react'
// 引入连接函数
import {connect} from 'react-redux'
import {add,dec} from '../redux/actions'

import Counter from '../components/counter'

export default connect(
    // function (state) {
    //     return {
    //         state: state
    //     }
    // },
    (state)=>({state:state}),
    {add, dec}
)(Counter)