import React, { useEffect, useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import {
  GoBackButton,
  HomeButton,
  SubmitFormButton,
} from '../../components/buttons'
import CardHeader from '../../components/card/CardHeader'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { fetchSingleOrdner, postNewMainDoc } from '../../redux'

function NewMainDoc({ fetchSingleOrdner, postNewMainDoc, ordner }) {
  const [mainDocName, setMainDocName] = useState('')
  const [mainDocNote, setMainDocNote] = useState('')
  const [mainDocAlert, setMainDocAlert] = useState('')
  const [mainDocUpload, setMainDocUpload] = useState('')

  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    fetchSingleOrdner(id)
  }, [fetchSingleOrdner, id])

  const submitHandler = (e) => {
    e.preventDefault()
    postNewMainDoc(mainDocName, mainDocNote, mainDocAlert, mainDocUpload, id)

    setMainDocName('')
    setMainDocNote('')
    setMainDocAlert('')
    setMainDocUpload('')

    history.goBack()
  }

  return (
    <Card className="mt-4">
      <Card.Body>
        <CardHeader
          title={
            ordner
              ? `Nieuw Hoofd document ${ordner.name}`
              : 'Nieuw Hoofd document'
          }
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

          <div className="action-group d-flex justify-content-between my-4">
            <span>
              <GoBackButton />
              <SubmitFormButton title={'Hoofd Document toevoegen'} />
            </span>
            <HomeButton />
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.ordner.loading,
    ordner: state.ordner.ordner,
    maindocs: state.ordner.maindocs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleOrdner: (id) => dispatch(fetchSingleOrdner(id)),

    postNewMainDoc: (
      mainDocName,
      mainDocNote,
      mainDocAlert,
      mainDocUpload,
      id,
    ) => {
      dispatch(
        postNewMainDoc(
          mainDocName,
          mainDocNote,
          mainDocAlert,
          mainDocUpload,
          id,
        ),
      )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMainDoc)
