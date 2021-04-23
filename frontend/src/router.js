import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Attachement from './pages/Attachement'
import NewOrdner from './pages/forms/NewOrdner'
import Home from './pages/Home'
import MainDoc from './pages/MainDoc'
import Ordner from './pages/Ordner'
import NewMainDoc from './pages/forms/NewMainDoc'
import NewAttachment from './pages/forms/NewAttachment'

const RouterComp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/maindocs/create/:id" component={NewMainDoc} />
        <Route path="/maindocs/:id" component={MainDoc} />
        <Route path="/ordners/create" component={NewOrdner} />
        <Route exact path="/ordners/:id" component={Ordner} />
        <Route path="/attachments/create/:id" component={NewAttachment} />
        <Route exact path="/attachments/:id" component={Attachement} />
      </Switch>
    </Router>
  )
}
export default RouterComp
