import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.section`
  background-color: papayawhip;
  height: 60px;
  width: 100vw;
  z-index: 100;
  position: fixed;
  bottom: 0px;
`

export default class Footer extends Component {
  render() {
    return <StyledFooter>footer is here</StyledFooter>
  }
}
