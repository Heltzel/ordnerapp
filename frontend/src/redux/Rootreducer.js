import { combineReducers } from 'redux'
import homeReducer from './home/HomeReducer'

const rootReducer = combineReducers({
  home: homeReducer,
})

export default rootReducer
