import { combineReducers } from 'redux'

import loading from './reducers/testReducer'

const RootReducer = combineReducers({
  loading
})

export default RootReducer
