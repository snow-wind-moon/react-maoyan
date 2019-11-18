import { INCREMENT } from '../actions/actionType'


/* 
    reducers 是唯一数据源  只可读不可改
    所以首先我们需要初始化一个数据
*/
const initState = {
    count: 0
}

const countReducer = ( state = initState , action ) => {
/* 
    由于唯一数据源只可读不可改 所以我们需要 拷贝一份
    解构-最简单的浅拷贝 
*/
const newState = { ...state }

// 接下来我们应判断用户执行的交互动作类型
switch ( action.type ) {
    case INCREMENT:
        // 执行数据修改
        newState.count++
        break;
    default:
        break;
}

// 最后我们返回一组新的数据
return newState

}
 
// 导出reducer文件
export default countReducer