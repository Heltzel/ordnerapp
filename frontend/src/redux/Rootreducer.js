import { combineReducers } from 'redux'
import homeReducer from './home/HomeReducer'
import ordnerReducer from './ordner/OrdnerReducer'

const rootReducer = combineReducers({
  home: homeReducer,
  ordner: ordnerReducer,
})

export default rootReducer
