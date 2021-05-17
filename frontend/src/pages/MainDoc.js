import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Alert, Card, Table } from 'react-bootstrap'
import CardHeader from '../components/card/CardHeader'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {
  CreateNewButton,
  DeleteDocButton,
  GoBackButton,
  HomeButton,
  InfoButton,
} from '../components/buttons'
import { fetchSingleMaindoc, removeSingleMainDoc } from '../redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PdfViewer from '../components/viewers/PdfViewer'
import { RemovePdfService } from '../services/RemovePdfService'

function MainDoc({
  fetchSingleMaindoc,
  removeSingleMainDoc,
  maindoc,
  attachments,
  loading,
}) {
  const { id } = useParams()
  const [showInfo, setShowInfo] = useState(false)
  console.log(maindoc)
  useEffect(() => {
    fetchSingleMaindoc(id)
  }, [fetchSingleMaindoc, id])

  const removeAlertHandler = (e) => {
    e.preventDefault()
  }

  const removeDocHandler = (e) => {
    e.preventDefault()
    RemovePdfService(maindoc.diskFile).then((resp) => {
      if (resp.data.msg !== 'err') {
        removeSingleMainDoc(id)
      }
    })
    window.location.href = `/ordners/${maindoc.ordnerId}`
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
                  <span
                    style={
                      showInfo ? { color: 'grey' } : { color: 'transparent' }
                    }
                  >
                    <small>Dubbel click om te openen</small>
                  </span>
                </th>
                <th>Opmerking</th>
                <th className="d-flex justify-content-between">
                  <span> Alert</span>
                  <span
                    style={
                      showInfo ? { color: 'grey' } : { color: 'transparent' }
                    }
                  >
                    <small>Dubbel click om te verwijderen</small>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {attachments.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      {new Date(item.updatedAt)
                        .toLocaleString('nl-NL')
                        .substr(0, 9)}
                    </td>
                    <td>
                      <Link to={`/attachments/${item.id}`}>{item.name}</Link>
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
      <div className="action-group d-flex justify-content-between mx-3 my-4 row">
        <div>
          <span className="pl-2">
            <GoBackButton />
          </span>
          <span className="pr-1">
            <CreateNewButton
              route={`/attachments/create/${id}`}
              type={'button'}
              title={'Attachement Toevoegen'}
            />
          </span>
          <span className="pr-1" onClick={(e) => removeDocHandler(e)}>
            <DeleteDocButton />
          </span>
        </div>
        <span>
          <InfoButton showInfo={showInfo} setShowInfo={setShowInfo} />
          <HomeButton />
        </span>
      </div>
      <Card.Body>
        <h6>Hoofd document:</h6>
        <PdfViewer diskFile={maindoc.diskFile} />
      </Card.Body>
    </Card>
  )
}
const mapStateToProps = (state) => {
  return {
    loading: state.maindoc.loading,
    maindoc: state.maindoc.maindoc,
    attachments: state.maindoc.attachments,
    errorMsg: state.maindoc.errorMsg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleMaindoc: (id) => {
      dispatch(fetchSingleMaindoc(id))
    },
    // file path
    removeSingleMainDoc: (id) => {
      dispatch(removeSingleMainDoc(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDoc)
