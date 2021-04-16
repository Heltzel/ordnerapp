import {
  FETCH_ORDNERS_REQUEST,
  FETCH_ORDNERS_SUCCESS,
  FETCH_ORDNERS_FAILURE,
} from './OrdnerTypes'

const initialState = {
  loading: false,
  ordners: [],
  errorMsg: '',
}

const ordnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDNERS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_ORDNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        ordners: action.payload,
        errorMsg: '',
      }

    case FETCH_ORDNERS_FAILURE:
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
