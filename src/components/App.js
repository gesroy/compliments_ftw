import React, { Component } from 'react'
import ComplimentScreen from './ComplimentScreen'
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import InputScreenContainer from '../containers/InputScreenContainer'
import Footer from './Footer'
import reducer from '../reducer'
import { saveToLocalStorage } from '../middlewares'
import { applyMiddleware, createStore } from 'redux'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveToLocalStorage)
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={ComplimentScreen} />
            <Route path="/input" component={InputScreenContainer} />
            <Route component={Footer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
