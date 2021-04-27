import axios from 'axios'
const URL = 'http://localhost:5000/'

export const UploadPdfService = async (file) => {
  let formdata = new FormData()
  formdata.append('my_file', file)
  const resp = await axios
    .post(URL + 'uploads/create', formdata, {
      'Content-Type': 'multipart/form-data',
    })
    .then((res) => {
      console.log(res.data)
      return { success: res.data }
    })
    .catch((err) => {
      console.log(err)
      return { error: err }
    })
  return resp
}
