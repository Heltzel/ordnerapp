import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { UploadPdfService } from '../services'

function Upload() {
  const [file, setFile] = useState('')
  const [fileUrl, setFileUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    UploadPdfService(file).then((resp) => {
      if (resp.success) {
        setFileUrl(resp.success.filePath)
      }
    })
  }

  return (
    <Card className="m-4 p-5">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>Upload</button>
      {fileUrl && fileUrl}
    </Card>
  )
}

export default Upload
