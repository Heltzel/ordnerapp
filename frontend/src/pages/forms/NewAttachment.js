import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import CardHeader from '../../components/card/CardHeader'
import {
  GoBackButton,
  HomeButton,
  SubmitFormButton,
} from '../../components/buttons'
import { useParams, useHistory } from 'react-router'

function NewAttachment() {
  const [attachmentName, setAttachmentName] = useState('')
  const [attachmentNote, setAttachmentNote] = useState('')
  const [attachmentAlert, setAttachmentAlert] = useState('')
  const [attachmentUpload, setAttachmentUpload] = useState('')

  const { id } = useParams()
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()

    setAttachmentName('')
    setAttachmentNote('')
    setAttachmentAlert('')
    setAttachmentUpload('')
    // history.goBack()
  }
  return (
    <Card className="mt-4">
      <Card.Body>
        <CardHeader
          title={'Nieuw Attachment'}
          subtitle={'Maak een nieuw attachment aan'}
        />

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
              value={attachmentUpload}
              onChange={(e) => setAttachmentUpload(e.target.value)}
            />
          </Form.Group>

          <div className="action-group d-flex justify-content-between mx-1 my-4">
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

export default NewAttachment
