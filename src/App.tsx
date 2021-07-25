// eslint-disable-next-line
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import './styles/App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect path="*" to="/" />
        </Switch>
      </>
    )
  }
}

export default App