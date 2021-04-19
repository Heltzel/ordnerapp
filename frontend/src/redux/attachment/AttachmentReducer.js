import {
  FETCH_ATTACHMENT_FAILURE,
  FETCH_ATTACHMENT_REQUEST,
  FETCH_ATTACHMENT_SUCCESS,
} from './AttachmentTypes'

const initialState = {
  loading: false,
  attachment: [],
  errorMsg: '',
}

const attachmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ATTACHMENT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_ATTACHMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        attachment: action.payload,
        errorMsg: '',
      }
    case FETCH_ATTACHMENT_FAILURE:
      return {
        ...state,
        loading: false,
        attachment: [],
        errorMsg: action.payload,
      }
    default:
      return state
  }
}

export default attachmentReducer
