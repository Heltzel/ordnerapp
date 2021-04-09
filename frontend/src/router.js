import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewOrdner from './pages/forms/NewOrdner'
import Home from './pages/Home'
import MainDoc from './pages/MainDoc'
import Ordner from './pages/Ordner'

const RouterComp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/maindocs/:id" component={MainDoc} />
        <Route path="/ordners/create" component={NewOrdner} />
        <Route exact path="/ordners/:id" component={Ordner} />
      </Switch>
    </Router>
  )
}
export default RouterComp
