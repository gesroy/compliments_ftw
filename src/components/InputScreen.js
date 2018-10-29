import React, { Component } from 'react'
import InputfieldContainer from '../containers/InputfieldContainer'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class InputScreen extends Component {
  static propTypes = {
    saveComplimentToReviewOnServer: PropTypes.func.isRequired,
    tempCompliment: PropTypes.string,
    loadComplimentsToReviewFromServer: PropTypes.func,
  }

  componentDidMount() {
    this.props.loadComplimentsToReviewFromServer()
  }

  render() {
    return (
      <div>
        <h3>Schick uns dein Kompliment</h3>
        <InputfieldContainer />
        <Link to="/review" style={{ textDecoration: 'none' }}>
          <Button
            onClick={() =>
              this.props.saveComplimentToReviewOnServer(
                this.props.tempCompliment
              )
            }
          >
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
