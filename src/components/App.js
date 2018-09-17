import React, { Component } from 'react'
import Complimentscreen from './ComplimentScreen'
import './App.css'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Complimentscreen />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
