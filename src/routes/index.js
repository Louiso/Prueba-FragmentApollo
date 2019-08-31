import React, { Component } from 'react'
import { Router } from "@reach/router"
import Home from '../containers/home';
import Test from '../containers/test';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Home path="/home"/>
        <Test path="/test/*"/>
      </Router>
    )
  }
}

export default Routes
