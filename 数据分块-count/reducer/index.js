/* 
    reducer 是一个纯函数
    此文件为 rootReducer 
    是用于统一管理其它 reducer 的文件
*/

import { combineReducers } from 'redux'
import countState from './countReducer'

const rootReducer = combineReducers({
    // 此处放置其它的 reducer
    countState
})


export default rootReducer
