import React from 'react'
import { Card, Form } from 'react-bootstrap'
import CreateNewButton from '../../components/buttons/CreateNewButton'
import GoBackButton from '../../components/buttons/GoBackButton'
import HomeButton from '../../components/buttons/HomeButton'
import CardHeader from '../../components/card/CardHeader'

function NewOrdner() {
  return (
    <Card className="mt-4" style={{ height: '80vh' }}>
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
          <div className="action-group d-flex justify-content-between mt-4">
            <span>
              <GoBackButton />

              <CreateNewButton
                route={''}
                title={'Ordner Toevoegen'}
                type={'submit'}
              />
            </span>
            <HomeButton />
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default NewOrdner
