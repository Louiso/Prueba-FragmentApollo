import React, { Component } from 'react'
import { Router } from "@reach/router"
import Home from '../containers/home';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Home path="/home"/>
      </Router>
    )
  }
}

export default Routes
