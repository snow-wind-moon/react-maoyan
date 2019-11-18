import React from 'react'
import store from '../store'
import { addTodo } from '../action'

export default class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: store.getState().todos // 给状态赋初值
        }
    }
    renderItem = () => {
        return this.state.todos.map( item => <li key = { item.id }> { item.task } </li>)
    }

    add = ( e ) => {
        if ( e.keyCode === 13 ) {
            addTodo( e.target.value )
            e.target.value = ''
        }
    }

    componentDidMount () {
        // 做 redux 事件的订阅
        store.subscribe(() => {
            this.setState({
                todos: store.getState().todos
            })
        })
    }

    render () {
        return(
            <div>
                <input type = "text" onKeyUp = { this.add } />
                <ul>
                    { this.renderItem() }
                </ul>
            </div>
        )
    }
}