import axios from 'axios'
import {
  FETCH_ORDNERS_FAILURE,
  FETCH_ORDNERS_REQUEST,
  FETCH_ORDNERS_SUCCESS,
} from './OrdnerTypes'
const URL = 'http://localhost:5000/'

export const fetchOrdnersRequest = () => {
  return {
    type: FETCH_ORDNERS_REQUEST,
  }
}

export const fetchOrdnersSuccess = (ordners) => {
  return {
    type: FETCH_ORDNERS_SUCCESS,
    payload: ordners,
  }
}

export const fetchOrdnersFailure = (errorMsg) => {
  return {
    type: FETCH_ORDNERS_FAILURE,
    payload: errorMsg,
  }
}

export const fetchOrdners = () => {
  return (dispatch) => {
    dispatch(fetchOrdnersRequest)
    axios
      .get(URL + 'ordners/index')
      .then((resp) => {
        const ordners = resp.data.data
        dispatch(fetchOrdnersSuccess(ordners))
      })
      .catch((err) => {
        const errorMsg = err
        dispatch(fetchOrdnersFailure(errorMsg))
      })
  }
}
