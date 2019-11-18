// import { CHANGE_TABFLAG } from '../actions/actionType'
const initState = {
    title: 'snow',
    tabFlag: false
}

const TabReducer = ( state = initState, action) => {
    const newState = {
        ...state
    }
    switch ( action.type ) {
        case CHANGE_TABFLAG:
            newState.tabFlag = true
            break;
        default:
            break;
    }
    return newState
}

// export default TabReducer