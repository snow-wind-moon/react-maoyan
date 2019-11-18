import { ADD_TODO } from './actionType'
import store from '../store'

export const addTodo = val => { //val 是从视图中发过来的数据
    /* 
        动作的创建
        const action = {
            type: addTodo,
            payload: val
        }
        动作的发送
        store.dispatch( action )
     */
        console.log( 'actions 执行了' )
        store.dispatch({
            type: ADD_TODO,
            payload: val
        })
}