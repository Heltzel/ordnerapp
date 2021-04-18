import { Card, Table } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CreateNewButton from '../components/buttons/CreateNewButton'
import CardHeader from '../components/card/CardHeader'
import { fetchHome } from '../redux'
import { connect } from 'react-redux'

function Home({ fetchHome, homeList, loading }) {
  useEffect(() => {
    fetchHome()
  }, [fetchHome])

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
            {homeList.map((item) => {
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
      </Card.Body>
      <div className="action-group d-flex justify-content-between mx-3 my-4">
        <CreateNewButton
          route={'ordners/create'}
          type={''}
          title={'Nieuwe Ordner'}
        />
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => {
  console.log(state.home)
  return {
    loading: state.home.loading,
    homeList: state.home.ordners,
    errorMsg: state.home.errorMsg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHome: () => dispatch(fetchHome()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
