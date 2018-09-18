import React, { Component } from 'react'
import Inputfield from './Inputfield'
import Button from './Button'
import { Link } from 'react-router-dom'

export default class InputScreen extends Component {
  render() {
    return (
      <div>
        <h3>Schick uns dein Kompliment</h3>
        <Inputfield />
        <Button>Kompliment abschicken</Button>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>Abbrechen</Button>
        </Link>
      </div>
    )
  }
}
