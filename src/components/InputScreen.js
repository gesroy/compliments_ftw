import React, { Component } from 'react'
import InputfieldContainer from '../containers/InputfieldContainer'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class InputScreen extends Component {
  static propTypes = {
    onSaveComplimentText: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <h3>Schick uns dein Kompliment</h3>
        <InputfieldContainer />
        <Button onClick={this.props.onSaveComplimentText}>
          Kompliment abschicken
        </Button>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>Abbrechen</Button>
        </Link>
      </div>
    )
  }
}
