import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
import Inputfield from './Inputfield'

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
    compliment: PropTypes.string,
  }

  state = { edit: false }

  renderInputfield = () => {
    return this.state.edit ? (
      <StyledReviewCard>
        <Inputfield value={this.props.compliment} />
        <Button>Abschicken</Button>
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
