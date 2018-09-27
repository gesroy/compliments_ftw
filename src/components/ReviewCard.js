import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
import ReviewInputContainer from '../containers/ReviewInputContainer'

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
  }

  state = { edit: false }

  renderInputfield = () => {
    return this.state.edit ? (
      <StyledReviewCard key={this.props.index}>
        <ReviewInputContainer>{this.props.compliment}</ReviewInputContainer>
        <Button
          onClick={() =>
            this.props.onSaveComplimentText(
              this.props.index,
              this.props.inReviewText
            )
          }
        >
          Abschicken
        </Button>
      </StyledReviewCard>
    ) : (
      <StyledReviewCard>
        <p>{this.props.compliment}</p>
        <Button onClick={() => this.setState({ edit: true })}>Editieren</Button>
      </StyledReviewCard>
    )
  }

  render() {
    return this.renderInputfield()
  }
}
