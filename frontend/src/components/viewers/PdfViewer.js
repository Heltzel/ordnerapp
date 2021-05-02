import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PdfViewer() {
  const URL = 'http://localhost:5000/'
  const [pdf, setPdf] = useState({})

  // THIS ONE
  useEffect(() => {
    axios({
      url: URL + `uploads/file`,
      method: 'GET',
      responseType: 'arraybuffer', // important
    }).then((response) => {
      console.log(response)
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: 'application/pdf' }),
      )

      setPdf(url)
      // console.log(url)
      // const link = document.createElement('a')
      // link.href = url
      // link.setAttribute('download', 'file.pdf')
      // document.body.appendChild(link)
      // link.click()
    })
  }, [])

  return (
    <div>
      <object type="application/pdf" data={pdf} width="100%" height="1500">
        <p>error</p>
      </object>
    </div>
  )
}

export default PdfViewer
