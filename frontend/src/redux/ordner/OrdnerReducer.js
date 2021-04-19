import {
  FETCH_ORDNER_FAILURE,
  FETCH_ORDNER_REQUEST,
  FETCH_ORDNER_SUCCESS,
} from './OrdnerTypes'

const initialState = {
  loading: true,
  ordners: [],
  maindocs: [],
  errorMsg: '',
}

const ordnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDNER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_ORDNER_SUCCESS:
      return {
        ...state,
        loading: false,
        ordner: action.payload,
        maindocs: action.payload.Main_docs,
        errorMsg: '',
      }
    case FETCH_ORDNER_FAILURE:
      return {
        ...state,
        loading: false,
        ordner: [],
        maindocs: [],
        errorMsg: action.payload,
      }

    default:
      return state
  }
}

export default ordnerReducer
