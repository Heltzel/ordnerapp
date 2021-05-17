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

export const fetchSingleMaindoc = (id) => {
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

export const postNewMainDoc = (
  mainDocName,
  mainDocNote,
  mainDocAlert,
  mainDocDiskFile,
  id,
) => {
  return (dispatch) => {
    dispatch(fetchMaindocRequest())
    axios
      .post(URL + `maindocs/create`, {
        name: mainDocName,
        note: mainDocNote,
        alert: mainDocAlert,
        diskFile: mainDocDiskFile,
        ordnerId: id,
      })
      .then((resp) => {
        console.log(resp)
        // dispatch(fetchMaindocSuccess(resp.data.data))
      })
      .catch((err) => {
        console.log(err)
        // dispatch(fetchMaindocFailure(err))
      })
  }
}

export const removeSingleMainDoc = (id) => {
  return (dispatch) => {
    console.log('remove')

    axios
      .delete(URL + `maindocs/${id}/destroy`)
      .then((resp) => {
        console.log(resp)
        // dispatch(fetchMaindocSuccess(resp.data.data))
      })
      .catch((err) => {
        console.log(err)
        // dispatch(fetchMaindocFailure(err))
      })
  }
}
