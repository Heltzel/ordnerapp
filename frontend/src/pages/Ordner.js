import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Table } from 'react-bootstrap'
import CardHeader from '../components/card/CardHeader'
import {
  CreateNewButton,
  GoBackButton,
  HomeButton,
} from '../components/buttons'
import { fetchSingleOrdner } from '../redux'
import { connect } from 'react-redux'

function Ordner({ fetchSingleOrdner, ordner, maindocs, loading }) {
  const { id } = useParams()

  useEffect(() => {
    fetchSingleOrdner(id)
    console.log('effect')
  }, [fetchSingleOrdner, id])

  return (
    <Card className="mt-4 ">
      <Card.Body>
        {!loading && (
          <CardHeader title={`${ordner.name} ordner`} subtitle={ordner.note} />
        )}
        <h6 className="mt-2">Documenten:</h6>
        {maindocs.length < 1 && 'empty'}
        {!loading && maindocs.length > 0 ? (
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Hoofd documenten</th>
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
                    <td>
                      <Link to={`/maindocs/${item.id}`}>{item.name}</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        ) : (
          <span> Geen documenten</span>
        )}
      </Card.Body>
      <div className="action-group d-flex justify-content-between mx-3 my-4">
        <span>
          <GoBackButton />
          <CreateNewButton
            route={`/maindocs/create/${id}`}
            type={'button'}
            title={'Nieuw Document'}
          />
        </span>
        <HomeButton />
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.ordner.loading,
    ordner: state.ordner.ordner,
    maindocs: state.ordner.maindocs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleOrdner: (id) => dispatch(fetchSingleOrdner(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ordner)
