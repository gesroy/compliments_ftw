import React, { Component } from 'react'
import styled from 'styled-components'
import kompliment1 from '../images/kompliment1.jpg'
import kompliment2 from '../images/kompliment2.jpg'
import mail from '../images/mail.svg'

const StyledComplimentCard = styled.div`
  width: 100vw;
  padding-bottom: 20px;
`

export default class ComplimentCard extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledComplimentCard>
          <img src={kompliment1} width="100%" alt="First compliment" />
          <a href="mailto:&subject=A%compliment%for%20you">
            <img src={mail} width="40" height="40" alt="Click here to share the compliment above"/>
          </a>
        </StyledComplimentCard>
        <StyledComplimentCard>
          <img src={kompliment2} width="100%" alt="First compliment" />
          <a href="mailto:&subject=A%compliment%for%20you">
            <img src={mail} width="40" height="40" alt="Click here to share the compliment above"/>
          </a>
        </StyledComplimentCard>
      </React.Fragment>
    )
  }
}
