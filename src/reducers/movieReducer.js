import { GET_MOVIES } from '../actions/actionType'

// reducer 是唯一数据源
const initState = {
    // 给状态赋初值
    movies: null
}

const movieReducer = ( state = initState, action ) => {
    // 唯一数据源只读不可修改所以要拷贝一份
    const newState = { ...state }
    switch ( action.type ) {
        case GET_MOVIES:
            // 这里做数据修改
            console.log(action.payload)
            newState.movies = action.payload
            break;
        default:
            break;
    }
    return newState
}

export default movieReducer