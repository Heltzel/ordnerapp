import { Card, Table } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CreateNewButton from '../components/buttons/CreateNewButton'
import CardHeader from '../components/card/CardHeader'
import { fetchOrdners } from '../redux'
import { connect } from 'react-redux'

function Home({ fetchOrdners, ordnerList, loading }) {
  useEffect(() => {
    fetchOrdners()
  }, [fetchOrdners])

  return (
    <Card className="mt-4">
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

const mapStateToProps = (state) => {
  return {
    loading: state.ordner.loading,
    ordnerList: state.ordner.ordners,
    errorMsg: state.ordner.errorMsg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrdners: () => dispatch(fetchOrdners()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
