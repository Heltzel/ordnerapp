import React, { useEffect, useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import CardHeader from '../../components/card/CardHeader'
import {
  GoBackButton,
  HomeButton,
  SubmitFormButton,
} from '../../components/buttons'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { fetchSingleMaindoc, postNewAttachment } from '../../redux'
import { UploadPdfService } from '../../services'
import { BlankAlert, ErrorAlert } from '../../components/alerts'

function NewAttachment({ fetchSingleMaindoc, postNewAttachment, maindoc }) {
  const [attachmentName, setAttachmentName] = useState('')
  const [attachmentNote, setAttachmentNote] = useState('')
  const [attachmentAlert, setAttachmentAlert] = useState('')
  // const [attachmentDiskFile, setAttachmentDiskFile] = useState('')
  let attachmentDiskFile = ''

  const [file, setFile] = useState('')
  const [error, setError] = useState('')

  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    fetchSingleMaindoc(id)
  }, [fetchSingleMaindoc, id])

  const submitHandler = (e) => {
    e.preventDefault()
    UploadPdfService(file).then((resp) => {
      if (resp.success) {
        attachmentDiskFile = resp.success.filePath
        postNewAttachment(
          attachmentName,
          attachmentNote,
          attachmentAlert,
          attachmentDiskFile,
          id,
        )
      } else if (resp.error) {
        setError(resp.error)
      }
    })

    setAttachmentName('')
    setAttachmentNote('')
    setAttachmentAlert('')
    attachmentDiskFile = ''

    history.goBack()
  }
  return (
    <Card className="mt-4">
      <Card.Body>
        <CardHeader
          title={
            maindoc ? `Nieuw Attachment ${maindoc.name}` : 'Nieuw Attachment'
          }
          subtitle={'Maak een nieuw attachment aan'}
        />
        {error ? <ErrorAlert msg={error} /> : <BlankAlert />}
        <Form className="mt-4" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label className="pl-2">Attachment Naam:</Form.Label>
            <Form.Control
              type="text"
              placeholder="placeholder"
              value={attachmentName}
              onChange={(e) => setAttachmentName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="pl-2">Attachment Subtitel:</Form.Label>
            <Form.Control
              type="text"
              placeholder="placeholder"
              value={attachmentNote}
              onChange={(e) => setAttachmentNote(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="pl-2">Attachment Alert:</Form.Label>
            <Form.Control
              type="text"
              placeholder="placeholder"
              value={attachmentAlert}
              onChange={(e) => setAttachmentAlert(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Selecteer een document:"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

          <div className="action-group d-flex justify-content-between my-4">
            <span>
              <GoBackButton />
              <SubmitFormButton title={'Attachment toevoegen'} />
            </span>
            <HomeButton />
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state) => {
  console.log(state.maindoc.maindoc)
  return {
    maindoc: state.maindoc.maindoc,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleMaindoc: (id) => {
      fetchSingleMaindoc(id)
    },

    postNewAttachment: (
      attachmentName,
      attachmentNote,
      attachmentAlert,
      attachmentDiskFile,
      id,
    ) => {
      dispatch(
        postNewAttachment(
          attachmentName,
          attachmentNote,
          attachmentAlert,
          attachmentDiskFile,
          id,
        ),
      )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAttachment)
