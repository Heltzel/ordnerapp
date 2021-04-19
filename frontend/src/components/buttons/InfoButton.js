import React from 'react'
import { Button } from 'react-bootstrap'
import { BsQuestionCircle } from 'react-icons/bs'

function InfoButton({ showInfo, setShowInfo }) {
  // const [showInfo, setShowInfo] = useState(true)
  return (
    <Button
      variant={showInfo ? 'secondary' : 'dark'}
      className="mx-1"
      onClick={() => setShowInfo(!showInfo)}
    >
      <span>
        <BsQuestionCircle />
      </span>
    </Button>
  )
}

export default InfoButton
