import React from 'react'
import { Card } from 'react-bootstrap'
import CardHeader from '../components/buttons/CardHeader'
import GoBackButton from '../components/buttons/GoBackButton'

function MainDoc() {
  return (
    <Card className="mt-4">
      <Card.Body>
        <CardHeader title={'Main Doc'} subtitle={'Docs and attachments'} />
        <div className="action-group mt-4">
          <GoBackButton />
        </div>
      </Card.Body>
    </Card>
  )
}

export default MainDoc
