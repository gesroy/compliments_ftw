import React, { Component } from 'react'
import styled from 'styled-components'
import support from '../images/support.svg'
import ruler from '../images/ruler.svg'
import certificate from '../images/certificate.svg'
import { Link } from 'react-router-dom'

const StyledFooter = styled.section`
  background-color: papayawhip;
  height: 60px;
  width: 100vw;
  z-index: 100;
  position: fixed;
  bottom: 0px;
  border-top: 2px solid white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Link to="/input">
          <img
            src={support}
            width="40"
            height="40"
            data-test-id="Footer-Nav-To-Input"
            alt="Click to reach input"
          />
        </Link>
        <Link to="/review">
          <img
            src={ruler}
            width="30"
            height="30"
            data-test-id="Footer-Nav-To-Review"
            alt="Click to reach review"
          />
        </Link>
        <Link to="/user">
          <img
            src={certificate}
            width="30"
            height="30"
            data-test-id="Footer-Nav-To-Review"
            alt="Click to reach review"
          />
        </Link>
      </StyledFooter>
    )
  }
}
