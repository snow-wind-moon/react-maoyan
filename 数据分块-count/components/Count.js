import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { increment } from '../actions'

class Count extends Component {
   
    render() {
        const { count, increment } = this.props
        return(
            <div>
                <button onClick = { increment }> + 1 </button>
                <p> count 的值：{ count } </p>
            </div>
        )
    }
}

/* 
    export default connect(callback,callback) (Count)
    两个callback 第一个 callback 是用来帮助我们将store中的 state获取到
    第二个 callback 是帮助我们将actions中的方法获取到然后传递给当前组件

    const mapStateFormProps = state => {
        console.log("state", state)
        return (
            count: state.countState.count
        )
    }
 
    const mapDispatchFormProps = dispatch => {
        return  bindActionCreators({increment},dispatch)
    }

    export default connect( mapStateFormProps, mapDispatchFormProps ) ( Count )
*/

export default connect ( state => {
    return {        
        count: state.countState.count      
    }   
},
    dispatch => bindActionCreators({ increment }, dispatch )
) (Count)