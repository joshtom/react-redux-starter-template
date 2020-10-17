import { combineReducers } from 'redux'
import { counterReducer } from './reducers/counterReducer'

import loading from './reducers/testReducer'

const RootReducer = combineReducers({
  loading,
  counterReducer
})

export default RootReducer
