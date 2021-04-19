import axios from 'axios'
import {
  FETCH_MAINDOC_FAILURE,
  FETCH_MAINDOC_REQUEST,
  FETCH_MAINDOC_SUCCESS,
} from './MaindocTypes'
const URL = 'http://localhost:5000/'

export const fetchMaindocRequest = () => {
  return {
    type: FETCH_MAINDOC_REQUEST,
  }
}

export const fetchMaindocSuccess = (maindocData) => {
  return {
    type: FETCH_MAINDOC_SUCCESS,
    payload: maindocData,
  }
}

export const fetchMaindocFailure = (errorMsg) => {
  return {
    type: FETCH_MAINDOC_FAILURE,
    payload: errorMsg,
  }
}

export const fetchMaindoc = (id) => {
  return (dispatch) => {
    dispatch(fetchMaindocRequest())
    axios
      .get(URL + `maindocs/${id}/show`)
      .then((resp) => {
        const maindoc = resp.data.data[0]
        dispatch(fetchMaindocSuccess(maindoc))
      })
      .catch((err) => {
        const errorMsg = err
        dispatch(fetchMaindocFailure(errorMsg))
      })
  }
}
