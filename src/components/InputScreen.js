import React, { Component } from 'react'
import InputfieldContainer from '../containers/InputfieldContainer'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class InputScreen extends Component {
  static propTypes = {
    onSaveComplimentToReview: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <h3>Schick uns dein Kompliment</h3>
        <InputfieldContainer value="love is in the air" />
        <Link to="/review" style={{ textDecoration: 'none' }}>
          <Button onClick={this.props.onSaveComplimentToReview}>
            Kompliment abschicken
          </Button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>Abbrechen</Button>
        </Link>
      </div>
    )
  }
}
