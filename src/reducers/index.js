import { combineReducers } from 'redux'
import movieReducer from './movieReducer';
// import TabReducer from './TabReducer'
const rootReducer = combineReducers({
    movieReducer,
    // TabReducer
})

export default rootReducer