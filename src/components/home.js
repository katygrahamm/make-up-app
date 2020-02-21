import App from './app.js'
import {Route, Switch, Link} from 'react-router-dom'
import React from 'react'
import Start from './start'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Start}/>
          <Route path='/shopping' render={() => (
            <App />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default Home;
