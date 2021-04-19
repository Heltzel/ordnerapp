import { combineReducers } from 'redux'
import homeReducer from './home/HomeReducer'
import maindocReducer from './maindoc/MaindocReducer'
import ordnerReducer from './ordner/OrdnerReducer'

const rootReducer = combineReducers({
  home: homeReducer,
  ordner: ordnerReducer,
  maindoc: maindocReducer,
})

export default rootReducer
