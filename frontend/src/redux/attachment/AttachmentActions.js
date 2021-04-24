import axios from 'axios'
import {
  FETCH_ATTACHMENT_FAILURE,
  FETCH_ATTACHMENT_REQUEST,
  FETCH_ATTACHMENT_SUCCESS,
} from './AttachmentTypes'
const URL = 'http://localhost:5000/'

export const fetchAttachmentRequest = () => {
  return {
    type: FETCH_ATTACHMENT_REQUEST,
  }
}

export const fetchAttachmentSuccess = (attachmentData) => {
  return {
    type: FETCH_ATTACHMENT_SUCCESS,
    payload: attachmentData,
  }
}

export const fetchAttachmentFailure = (errorMsg) => {
  return {
    type: FETCH_ATTACHMENT_FAILURE,
    payload: errorMsg,
  }
}

export const fetchAttachment = (id) => {
  return (dispatch) => {
    dispatch(fetchAttachmentRequest())
    axios
      .get(URL + `attacheddocs/${id}/show`)
      .then((resp) => {
        const attachment = resp.data.data[0]
        dispatch(fetchAttachmentSuccess(attachment))
      })
      .catch((err) => {
        const errMsg = err
        dispatch(fetchAttachmentFailure(errMsg))
      })
  }
}

export const postNewAttachment = (
  attachmentName,
  attachmentNote,
  attachmentAlert,
  attachmentDiskFile,
  id,
) => {
  return (dispatch) => {
    dispatch(fetchAttachmentRequest())
    axios
      .post(URL + `attacheddocs/create`, {
        name: attachmentName,
        note: attachmentNote,
        alert: attachmentAlert,
        diskFile: attachmentDiskFile,
        maindocId: id,
      })
      .then((resp) => {
        console.log(resp)
        // dispatch(fetchAttachmentSuccess(resp.data.data))
      })
      .catch((err) => {
        console.log(err)
        // dispatch(fetchAttachmentFailure(err))
      })
  }
}
