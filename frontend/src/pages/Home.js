import axios from 'axios'
import { Card, Table } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CreateNewButton from '../components/buttons/CreateNewButton'
import CardHeader from '../components/buttons/CardHeader'

function Home() {
  const URL = 'http://localhost:5000/'
  const [ordnerList, setOrdnerList] = useState([])
  useEffect(() => {
    axios
      .get(URL + 'ordners/index')
      .then((resp) => setOrdnerList(resp.data.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <Card className="mt-4 ">
      <Card.Body>
        <CardHeader title={'Home'} subtitle={'Alle Ordners'} />

        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Ordner Naam</th>
            </tr>
          </thead>
          <tbody>
            {ordnerList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link to={`/ordners/${item.id}`}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <div className="action-group mt-4">
          <CreateNewButton
            route={'ordners/create'}
            type={''}
            title={'Nieuwe Ordner'}
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default Home
