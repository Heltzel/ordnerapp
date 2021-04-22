import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import {
  GoBackButton,
  HomeButton,
  SubmitFormButton,
} from '../../components/buttons'
import CardHeader from '../../components/card/CardHeader'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

function NewMainDoc(props) {
  const [mainDocName, setMainDocName] = useState('')
  const [mainDocNote, setMainDocNote] = useState('')
  const [mainDocAlert, setMainDocAlert] = useState('')
  const [mainDocUpload, setMainDocUpload] = useState('')

  const { id } = useParams()

  const submitHandler = (e) => {
    e.preventDefault()
    setMainDocName('')
    setMainDocNote('')
    setMainDocAlert('')
    setMainDocUpload('')
  }

  return (
    <Card className="mt-4">
      <Card.Body>
        <CardHeader
          title={'Nieuw Hoofd Document'}
          subtitle={'Maak een nieuw hoofd document aan'}
        />
        <Form className="mt-4" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label className="pl-2"> Document Naam:</Form.Label>
            <Form.Control
              type="text"
              placeholder="v.b. Meterstanden door geven"
              value={mainDocName}
              onChange={(e) => setMainDocName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="pl-2"> Sub Titel:</Form.Label>
            <Form.Control
              type="text"
              value={mainDocNote}
              onChange={(e) => setMainDocNote(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="pl-2"> Alert: ( niet verplicht )</Form.Label>
            <Form.Control
              type="text"
              value={mainDocAlert}
              onChange={(e) => setMainDocAlert(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Selecteer een document:"
              value={mainDocUpload}
              onChange={(e) => setMainDocUpload(e.target.value)}
            />
          </Form.Group>

          <div className="action-group d-flex justify-content-between mx-1 my-4">
            <span>
              <GoBackButton />
              <SubmitFormButton title={'Nieuw Hoofd Document'} />
            </span>
            <HomeButton />
          </div>
        </Form>
      </Card.Body>
      {console.log(props.test)}
    </Card>
  )
}

//
const mapStateToProps = (state) => {
  console.log(state)
  return {
    test: state.ordner,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(NewMainDoc)
