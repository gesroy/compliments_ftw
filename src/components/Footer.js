import React, { Component } from 'react'
import styled from 'styled-components'
import hammer from '../images/hammer.svg'
import { Link } from 'react-router-dom'

const StyledFooter = styled.section`
  background-color: papayawhip;
  height: 60px;
  width: 100vw;
  z-index: 100;
  position: fixed;
  bottom: 0px;
  border-top: 2px solid white;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Link to="/input">
          <img
            src={hammer}
            width="40"
            height="40"
            data-test-id="Footer-Nav-To-Input"
            alt="Click here to reach input"
          />
        </Link>
      </StyledFooter>
    )
  }
}
