import React from 'react'
import { Alert } from 'react-bootstrap'

export function ErrorAlert({ msg }) {
  return <Alert variant="danger">{msg}</Alert>
}
