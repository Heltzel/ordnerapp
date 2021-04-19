import { combineReducers } from 'redux'
import attachmentReducer from './attachment/AttachmentReducer'
import homeReducer from './home/HomeReducer'
import maindocReducer from './maindoc/MaindocReducer'
import ordnerReducer from './ordner/OrdnerReducer'

const rootReducer = combineReducers({
  home: homeReducer,
  ordner: ordnerReducer,
  maindoc: maindocReducer,
  attachment: attachmentReducer,
})

export default rootReducer
