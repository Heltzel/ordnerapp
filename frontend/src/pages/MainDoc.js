import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Card, Table } from 'react-bootstrap'
import { useParams } from 'react-router'
import GoBackButton from '../components/buttons/GoBackButton'
import HomeButton from '../components/buttons/HomeButton'
import CardHeader from '../components/card/CardHeader'

function MainDoc() {
  const URL = 'http://localhost:5000/'
  const { id } = useParams()
  const [maindoc, setMaindoc] = useState([])
  const [attachments, setAttachments] = useState([])

  useEffect(() => {
    axios.get(URL + `maindocs/${id}/show`).then((resp) => {
      setMaindoc(resp.data.data[0])
      setAttachments(resp.data.data[0].Attached_docs)
      console.log(resp.data.data)
    })
  }, [id])
  return (
    <Card className="mt-4 " style={{ minHeight: '80vh' }}>
      <Card.Body>
        <CardHeader title={maindoc.name} subtitle={maindoc.note} />
        {maindoc.alert && (
          <Alert variant="danger" className="mt-2">
            {maindoc.alert}
          </Alert>
        )}
        <h6>Attachments:</h6>
        {attachments.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Datum</th>
                <th>Title</th>
                <th>Opmerking</th>
                <th>Alert</th>
              </tr>
            </thead>
            <tbody>
              {attachments.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      {new Date(item.createdAt)
                        .toLocaleString('nl-NL')
                        .substr(0, 9)}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.note}</td>
                    <td className="text-danger">{item.alert}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        ) : (
          'Geen attachments'
        )}
        <div className="action-group d-flex justify-content-between ">
          <span>
            <GoBackButton />
          </span>
          <HomeButton />
        </div>
      </Card.Body>
    </Card>
  )
}

export default MainDoc
