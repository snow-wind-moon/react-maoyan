/* 
    reducer 是一个纯函数
*/

import { ADD_TODO } from '../action/actionType'

const initState = { // 唯一数据源 只可读不可改
    todos: [
        {
            id: 1,
            task: '任务一'
        },
        {
            id: 2,
            task: '任务二'
        }
    ]

}

const reducer = ( state = initState , action ) => {
    /* 
        state 是初始状态
        action 是从 actions中发过来的动作
    */
   // 唯一数据源只可读不可改 因此要拷贝一份

   const newState = { ...state } // 解构是最简单的浅拷贝 只能拷贝一层

   switch ( action.type ) {
       case ADD_TODO:
           // 进行数据修改
           newState.todos.push({
               id: newState.todos.length + 1,
               task: action.payload
           })
            break;
        default:
            break;

   }

   return newState

}

export default reducer