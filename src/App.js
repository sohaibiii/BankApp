import React, { Component } from 'react'

import HEAD from './components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'

import Box2 from './components/box2'

import Form from './components/Form'
import Lists from './components/list'
import Accounts from './components/Accounts'
import Trans from './components/trans'

import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <HEAD />

          <Route exact path='/' component={Box2} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/accounts' component={Accounts} />
          <Route path='/lists' component={Lists} />
          <Route path='/trans' component={Trans} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App
