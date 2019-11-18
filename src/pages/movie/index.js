import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies } from '../../actions'

class Movie extends Component {
    componentDidMount () {
        this.props.getMovies()
    }

    render() {
        return (
            <div>
                <ul>
                    <li> </li>
                </ul>
            </div>
        )
    }
}


export default connect(
    state => state.movieReducer,
    dispatch => bindActionCreators({ getMovies }, dispatch)
) ( Movie )