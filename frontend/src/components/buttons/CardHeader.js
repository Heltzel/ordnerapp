import React from 'react'
import { Card } from 'react-bootstrap'

function CardHeader({ title, subtitle }) {
  return (
    <div className="bg-secondary text-white p-3">
      <Card.Title>
        <h1 className="text-capitalize">{title}</h1>
      </Card.Title>
      <h3>{subtitle}</h3>
    </div>
  )
}

export default CardHeader
