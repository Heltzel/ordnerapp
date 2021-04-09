import axios from 'axios'
import { Card, Table } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import GoBackButton from '../components/buttons/GoBackButton'
import CardHeader from '../components/buttons/CardHeader'
import CreateNewButton from '../components/buttons/CreateNewButton'
import { Link, useParams } from 'react-router-dom'

function Ordner({ match }) {
  const URL = 'http://localhost:5000/'
  const [ordner, setOrdner] = useState([])
  const [maindocs, setMaindocs] = useState([])

  const { id } = useParams()
  useEffect(() => {
    axios.get(URL + `ordners/${id}/show`).then((resp) => {
      setOrdner(resp.data.data[0])
      setMaindocs(resp.data.data[0].Main_docs)
    })
  }, [id])

  return (
    <Card className="mt-4">
      <Card.Body>
        <CardHeader title={`${ordner.name} ordner`} subtitle={ordner.note} />
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Datum</th>
              <th>Onderwerp</th>
            </tr>
          </thead>
          <tbody>
            {maindocs.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    {new Date(item.createdAt)
                      .toLocaleString('nl-NL')
                      .substr(0, 9)}{' '}
                  </td>
                  <Link to={`/maindocs/${item.id}`}>
                    <td>{item.name}</td>
                  </Link>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <div className="action-group mt-4">
          <GoBackButton />
          <CreateNewButton
            route={'ordners/create'}
            type={''}
            title={'Nieuw Document'}
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default Ordner
