// 创建 store

import { createStore } from 'redux'

// reducer 是唯一数据源所以需要导入reducer
import rootReducer from '../reducer'

const store = createStore( rootReducer )

export default store