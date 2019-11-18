import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// 创建一个 store
const store = createStore( rootReducer,composeWithDevTools( applyMiddleware( thunk ) ) )


export default store