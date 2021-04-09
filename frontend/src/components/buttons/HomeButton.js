import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomeButton() {
  return (
    <Link to={'/'}>
      <Button variant="dark" type="button">
        Home
      </Button>
    </Link>
  )
}

export default HomeButton
