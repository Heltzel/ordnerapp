import React from 'react'
import { Alert } from 'react-bootstrap'

export function BlankAlert() {
  return (
    <Alert variant="light" style={{ color: 'transparent' }}>
      &nbsp;
    </Alert>
  )
}
