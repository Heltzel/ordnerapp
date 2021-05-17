import axios from 'axios'
const URL = 'http://localhost:5000/'

export const RemovePdfService = async (diskFile) => {
  console.log(diskFile.toString())
  const resp = await axios
    .delete(URL + 'uploads/delete', {
      data: {
        diskFile: diskFile.toString(),
      },
    })
    .then((res) => {
      console.log(res.data)
      return { data: res.data }
    })
    .catch((err) => {
      console.log(err)
      return { error: err }
    })
  console.log(resp)
  return resp
}
