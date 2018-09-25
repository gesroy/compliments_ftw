import React, { Component } from 'react'
import styled from 'styled-components'
import mail from '../images/mail.svg'
import PropTypes from 'prop-types'

const StyledComplimentCard = styled.div`
  width: 100vw;
  padding-bottom: 20px;
`

const StyledComplimentText = styled.div`
  z-index: 100;
  width: 80vw;
  position: absolute;
  color: white;
  font-size: 2em;
  font-style: bold;
`

export default class ComplimentCard extends Component {
  static propTypes = {
    compliment: PropTypes.string,
    image: PropTypes.any,
  }

  render() {
    const ComplimentWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70vh;
    overflow: hidden;
    background-image: url('${this.props.image}');
    background-size: 100vw 75vh;
    `
    return (
      <StyledComplimentCard>
        <ComplimentWrapper>
          <StyledComplimentText>{this.props.compliment}</StyledComplimentText>
        </ComplimentWrapper>
        <a href="mailto:&subject=A%compliment%for%20you">
          <img
            src={mail}
            width="40"
            height="40"
            alt="Click here to share the compliment above"
          />
        </a>
      </StyledComplimentCard>
    )
  }
}
