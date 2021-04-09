import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

function GoBackButton() {
  const history = useHistory()

  const gobackHandler = () => {
    history.goBack()
  }
  return (
    <Button
      variant="secondary"
      className="mr-1"
      onClick={() => gobackHandler()}
    >
      Ga Terug
    </Button>
  )
}

export default GoBackButton
