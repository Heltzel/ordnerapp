import React from 'react'
import { Card, Form } from 'react-bootstrap'
import CardHeader from '../../components/buttons/CardHeader'
import CreateNewButton from '../../components/buttons/CreateNewButton'
import GoBackButton from '../../components/buttons/GoBackButton'

function NewOrdner() {
  return (
    <Card className="mt-4">
      <Card.Body>
        <CardHeader
          title={'Nieuwe Ordner'}
          subtitle={'Maak een nieuwe ordner aan'}
        />
        <Form className="mt-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="pl-2">Ordner Naam</Form.Label>
            <Form.Control type="text" placeholder="v.b. Telecom" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="pl-2">Sub Titel</Form.Label>
            <Form.Control type="text" value="Alle documenten betreffende..." />
          </Form.Group>
          <div className="action-group mt-4">
            <GoBackButton />

            <CreateNewButton
              route={''}
              title={'Ordner Toevoegen'}
              type={'submit'}
            />
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default NewOrdner
