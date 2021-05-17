import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PdfViewer({ diskFile }) {
  const URL = 'http://localhost:5000/'
  const [pdf, setPdf] = useState(null)

  // THIS ONE
  useEffect(() => {
    if (diskFile !== undefined) {
      axios({
        url: URL + `uploads/file/${diskFile}`,
        method: 'GET',
        responseType: 'arraybuffer', // important
      })
        .then((response) => {
          if (response === {}) {
            return response.json('niet gevonden')
          }
          const pdf = window.URL.createObjectURL(
            new Blob([response.data], { type: 'application/pdf' }),
          )

          setPdf(pdf)
        })
        .catch((err) => console.log(err))
    }
  }, [diskFile])

  return (
    <div>
      {pdf ? (
        <object type="application/pdf" data={pdf} width="100%" height="1500">
          <p>error</p>
        </object>
      ) : (
        <span>Niet gevonden</span>
      )}
    </div>
  )
}

export default PdfViewer
