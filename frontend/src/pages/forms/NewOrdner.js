import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import CardHeader from '../../components/card/CardHeader'
import {
  GoBackButton,
  HomeButton,
  SubmitFormButton,
} from '../../components/buttons'
import { postNewOrdner } from '../../redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

function NewOrdner({ postNewOrdner }) {
  const [ordnerName, setOrdnerName] = useState('')
  const [ordnerNote, setOrdnerNote] = useState('Alle documenten betreffende...')
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()
    postNewOrdner(ordnerName, ordnerNote)
    setOrdnerName('')
    setOrdnerNote('Alle documenten betreffende...')
    history.goBack()
  }

  return (
    <Card className="mt-4">
      <Card.Body>
        <CardHeader
          title={'Nieuwe Ordner'}
          subtitle={'Maak een nieuwe ordner aan'}
        />
        <Form className="mt-4" onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="pl-2">Ordner Naam</Form.Label>
            <Form.Control
              type="text"
              value={ordnerName}
              onChange={(e) => setOrdnerName(e.target.value)}
              placeholder="v.b. Telecom"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="pl-2">Sub Titel</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setOrdnerNote(e.target.value)}
              value={ordnerNote}
              required
            />
          </Form.Group>
          <div className="action-group d-flex justify-content-between  my-4">
            <span>
              <GoBackButton />
              <SubmitFormButton title={'Ordner toevoegen'} />
            </span>
            <HomeButton />
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    postNewOrdner: (name, note) => {
      dispatch(postNewOrdner(name, note))
    },
  }
}
export default connect(null, mapDispatchToProps)(NewOrdner)
