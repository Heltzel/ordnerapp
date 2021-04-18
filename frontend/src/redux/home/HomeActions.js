import axios from 'axios'
import {
  FETCH_HOME_FAILURE,
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
} from './HomeTypes'
const URL = 'http://localhost:5000/'

export const fetchHomeRequest = () => {
  return {
    type: FETCH_HOME_REQUEST,
  }
}

export const fetchHomeSuccess = (homeData) => {
  return {
    type: FETCH_HOME_SUCCESS,
    payload: homeData,
  }
}

export const fetchHomeFailure = (errorMsg) => {
  return {
    type: FETCH_HOME_FAILURE,
    payload: errorMsg,
  }
}

export const fetchHome = () => {
  return (dispatch) => {
    dispatch(fetchHomeRequest)
    axios
      .get(URL + 'ordners/index')
      .then((resp) => {
        const homeData = resp.data.data
        dispatch(fetchHomeSuccess(homeData))
      })
      .catch((err) => {
        const errorMsg = err
        dispatch(fetchHomeFailure(errorMsg))
      })
  }
}
