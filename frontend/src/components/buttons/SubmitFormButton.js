import React from 'react'
import { Button } from 'react-bootstrap'

function SubmitFormButton({ title }) {
  return (
    <Button variant="dark" type="submit">
      {title}
    </Button>
  )
}

export default SubmitFormButton
