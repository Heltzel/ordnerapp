import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Attachement from './pages/Attachement'
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
        <Route exact path="/attachments/:id" component={Attachement} />
      </Switch>
    </Router>
  )
}
export default RouterComp
