import { useState } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

function Upload() {
  const URL = 'http://localhost:5000/'
  const [file, setFile] = useState('')

  const handleOnchange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formdata = new FormData()
    formdata.append('my_file', file)
    axios
      .post(URL + 'uploads/create', formdata, {
        'Content-Type': 'multipart/form-data',
      })
      .then((res) => console.log(res.data))
  }

  return (
    <Card className="m-4 p-5">
      <input type="file" name="" id="" onChange={handleOnchange} />
      <button onClick={handleSubmit}>Upload</button>
    </Card>
  )
}

export default Upload
