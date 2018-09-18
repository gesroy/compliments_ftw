import React, { Component } from 'react'
import ComplimentScreen from './ComplimentScreen'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import InputScreen from './InputScreen'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ComplimentScreen} />
          <Route path="/input" component={InputScreen} />
          <Route component={Footer} />
        </div>
      </Router>
    )
  }
}

export default App
