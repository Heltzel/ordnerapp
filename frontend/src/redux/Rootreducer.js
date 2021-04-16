import { combineReducers } from 'redux'
import ordnerReducer from './ordner/OrdnerReducer'

const rootReducer = combineReducers({
  ordner: ordnerReducer,
})

export default rootReducer
