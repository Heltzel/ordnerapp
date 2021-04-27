import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { UploadPdfService } from '../services'

function Upload() {
  const [file, setFile] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    UploadPdfService(file).then((resp) => console.log(resp))
  }

  return (
    <Card className="m-4 p-5">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>Upload</button>
    </Card>
  )
}

export default Upload
