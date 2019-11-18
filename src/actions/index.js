import { GET_MOVIES } from './actionType'
// import { CHANGE_TABFLAG } from './actionType'
import request from './request'

export const getMovies = () => {
    return async dispatch => {
        // 先进行数据请求
        const result = await request({
            url: '/ajax/movieOnInfoList', // 这里需要先做反向代理配置 setupProxy.js
            params: {
                token: ''
            }
        })
        console.log("getMovies -> result", result)
        // 发送action
        dispatch({
            type: GET_MOVIES,
            payload: result.data
        })
    }
}
// export const getTab = () => {
//     return dispatch => {
//         dispatch({
//             type: CHANGE_TABFLAG,
            
//         })
//     }   
// }

