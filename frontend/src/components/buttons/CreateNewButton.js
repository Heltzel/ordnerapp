import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CreateNewButton({ route, type, title }) {
  return (
    <Link to={route}>
      <Button variant="dark" type={type}>
        {title}
      </Button>
    </Link>
  )
}

export default CreateNewButton
