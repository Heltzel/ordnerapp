import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Card, Table } from 'react-bootstrap'
import { useParams } from 'react-router'
import GoBackButton from '../components/buttons/GoBackButton'
import HomeButton from '../components/buttons/HomeButton'
import CardHeader from '../components/card/CardHeader'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import InfoButton from '../components/buttons/InfoButton'

function MainDoc() {
  const URL = 'http://localhost:5000/'
  const { id } = useParams()
  const [maindoc, setMaindoc] = useState([])
  const [attachments, setAttachments] = useState([])
  const [showInfo, setShowInfo] = useState(true)

  useEffect(() => {
    axios.get(URL + `maindocs/${id}/show`).then((resp) => {
      setMaindoc(resp.data.data[0])
      setAttachments(resp.data.data[0].Attached_docs)
      console.log(resp.data.data)
    })
  }, [id])

  const removeAlertHandler = (e) => {
    e.preventDefault()
  }
  return (
    <Card className="mt-4 ">
      <Card.Body>
        <CardHeader title={maindoc.name} subtitle={maindoc.note} />
        {maindoc.alert && (
          <Alert
            variant={maindoc.alert ? 'danger' : 'transparent'}
            className="mt-2 d-flex justify-content-between"
            style={maindoc.alert ? {} : { color: 'transparent' }}
          >
            {maindoc.alert}

            <AiOutlineCloseCircle
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
              onClick={removeAlertHandler}
              title="Verwijder Alert"
            />
          </Alert>
        )}
        <h6>Attachments:</h6>
        {attachments.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Datum</th>
                <th className="d-flex justify-content-between">
                  <span> Titel</span>
                  {showInfo && (
                    <small className="text-muted">
                      Dubbel click om te openen
                    </small>
                  )}
                </th>
                <th>Opmerking</th>
                <th className="d-flex justify-content-between">
                  <span> Alert</span>
                  {showInfo && (
                    <small className="text-muted">
                      Dubbel click om te verwijderen
                    </small>
                  )}
                </th>
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
                    <td>
                      <span style={{ cursor: 'pointer' }}>{item.name}</span>
                    </td>
                    <td>{item.note}</td>
                    <td className="text-danger">
                      {item.alert && (
                        <span style={{ cursor: 'pointer' }}>{item.alert}</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        ) : (
          'Geen attachments'
        )}
      </Card.Body>
      <div className="action-group d-flex justify-content-between mx-3 my-4">
        <span>
          <GoBackButton />
        </span>
        <span>
          <InfoButton showInfo={showInfo} setShowInfo={setShowInfo} />
          <HomeButton />
        </span>
      </div>
    </Card>
  )
}

export default MainDoc
