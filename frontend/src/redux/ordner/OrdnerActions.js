import axios from 'axios'
import {
  FETCH_ORDNER_REQUEST,
  FETCH_ORDNER_SUCCESS,
  FETCH_ORDNER_FAILURE,
} from './OrdnerTypes'

const URL = 'http://localhost:5000/'

export const fetchOrdnerRequest = () => {
  return {
    type: FETCH_ORDNER_REQUEST,
  }
}

export const fetchOrdnerSuccess = (ordner) => {
  return {
    type: FETCH_ORDNER_SUCCESS,
    payload: ordner,
  }
}

export const fetchOrdnerFailure = (errorMsg) => {
  return {
    type: FETCH_ORDNER_FAILURE,
    payload: errorMsg,
  }
}

export const fetchSingleOrdner = (id) => {
  return (dispatch) => {
    dispatch(fetchOrdnerRequest())
    axios
      .get(URL + `ordners/${id}/show`)
      .then((resp) => {
        const ordner = resp.data.data[0]
        dispatch(fetchOrdnerSuccess(ordner))
      })
      .catch((err) => {
        const errorMsg = err
        dispatch(fetchOrdnerFailure(errorMsg))
      })
  }
}

export const postNewOrdner = (name, note) => {
  return (dispatch) => {
    dispatch(fetchOrdnerRequest())
    axios
      .post(URL + `ordners/create`, { name: name, note: note })
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => console.log(err))
  }
}
