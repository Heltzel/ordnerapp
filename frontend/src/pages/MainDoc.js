import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Alert, Card, Table } from 'react-bootstrap'
import CardHeader from '../components/card/CardHeader'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import GoBackButton from '../components/buttons/GoBackButton'
import InfoButton from '../components/buttons/InfoButton'
import HomeButton from '../components/buttons/HomeButton'
import { fetchMaindoc } from '../redux'
import { connect } from 'react-redux'

function MainDoc({ fetchMaindoc, maindoc, attachments, loading }) {
  const { id } = useParams()
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    fetchMaindoc(id)
  }, [fetchMaindoc, id])

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
const mapStateToProps = (state) => {
  return {
    loading: state.maindoc.loading,
    maindoc: state.maindoc.maindoc,
    attachments: state.maindoc.attachments,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMaindoc: (id) => {
      dispatch(fetchMaindoc(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDoc)
