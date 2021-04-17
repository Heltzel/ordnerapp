import {
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
} from './HomeTypes'

const initialState = {
  loading: false,
  ordners: [],
  errorMsg: '',
}

const ordnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        ordners: action.payload,
        errorMsg: '',
      }

    case FETCH_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        ordners: [],
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
  }
}

export default ordnerReducer
