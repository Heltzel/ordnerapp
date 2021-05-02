import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Alert, Card } from 'react-bootstrap'
import { GoBackButton, HomeButton, InfoButton } from '../components/buttons'
import CardHeader from '../components/card/CardHeader'
import { fetchAttachment } from '../redux'
import { connect } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Attachement({ fetchAttachment, attachment, loading }) {
  const { id } = useParams()
  useEffect(() => {
    fetchAttachment(id)
  }, [fetchAttachment, id])

  const removeAlertHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Card className="mt-4 ">
      <Card.Body>
        <CardHeader
          title={`${attachment.name}  - attachment`}
          subtitle={`${attachment.note}`}
        />
        {attachment.alert && (
          <Alert
            variant={attachment.alert ? 'danger' : 'transparent'}
            className="mt-2 d-flex justify-content-between"
            style={attachment.alert ? {} : { color: 'transparent' }}
          >
            {attachment.alert}

            <AiOutlineCloseCircle
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
              onClick={removeAlertHandler}
              title="Verwijder Alert"
            />
          </Alert>
        )}
        <div className="d-flex justify-content-between">
          <h6>Attachment:</h6>
          <span className="d-inline-flex">
            <h6 className="mr-2">Datum: </h6>
            {new Date(attachment.updatedAt)
              .toLocaleString('nl-NL')
              .substr(0, 9)}
          </span>
        </div>
      </Card.Body>
      <div className="action-group d-flex justify-content-between mx-3 my-4">
        <span>
          <GoBackButton />
        </span>
        <span>
          {/* <InfoButton showInfo={showInfo} setShowInfo={setShowInfo} /> */}
          <InfoButton />
          <HomeButton />
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.attachment.loading,
    attachment: state.attachment.attachment,
    errorMsg: state.attachment.errorMsg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAttachment: (id) => {
      dispatch(fetchAttachment(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attachement)
