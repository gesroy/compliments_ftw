import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
import ReviewInputContainer from '../containers/ReviewInputContainer'
import { Link } from 'react-router-dom'
//import { Redirect } from 'react-router-dom'

const StyledReviewCard = styled.div`
  background-color: honeydew;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class ReviewCard extends Component {
  static propTypes = {
    inReviewText: PropTypes.string,
    compliment: PropTypes.string,
    onSaveComplimentText: PropTypes.func,
    index: PropTypes.number,
    saveComplimentOnServer: PropTypes.func,
    loadComplimentsToReviewFromServer: PropTypes.func,
    loadComplimentsFromServer: PropTypes.func,
    history: PropTypes.any,
  }

  componentDidUpdate() {
    this.props.loadComplimentsToReviewFromServer()
    this.props.loadComplimentsFromServer()
  }

  state = { edit: false }

  renderInputfield = () => {
    return this.state.edit ? (
      <StyledReviewCard key={this.props.index}>
        <ReviewInputContainer>{this.props.compliment}</ReviewInputContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            onClick={() =>
              this.props.saveComplimentOnServer(this.props.inReviewText)
            }
          >
            Abschicken
          </Button>
        </Link>
      </StyledReviewCard>
    ) : (
      <StyledReviewCard>
        <p>{this.props.compliment}</p>
        <Button
          data-test-id="Button-Edit-ReviewCard"
          onClick={() => this.setState({ edit: true })}
        >
          Editieren
        </Button>
      </StyledReviewCard>
    )
  }

  render() {
    return this.renderInputfield()
  }
}
