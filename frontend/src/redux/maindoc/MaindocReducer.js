import {
  FETCH_MAINDOC_FAILURE,
  FETCH_MAINDOC_REQUEST,
  FETCH_MAINDOC_SUCCESS,
} from './MaindocTypes'

const initialState = {
  loading: false,
  maindoc: [],
  attachments: [],
  errorMsg: '',
}

const maindocReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MAINDOC_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_MAINDOC_SUCCESS:
      return {
        ...state,
        loading: false,
        maindoc: action.payload,
        attachments: action.payload.Attached_docs,
        errorMsg: '',
      }
    case FETCH_MAINDOC_FAILURE:
      return {
        ...state,
        loading: false,
        maindoc: [],
        attachments: [],
        errorMsg: action.payload,
      }

    default:
      return state
  }
}

export default maindocReducer
