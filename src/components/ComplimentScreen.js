import React, { Component } from 'react'
import styled from 'styled-components'
import ComplimentCard from './ComplimentCard'

const StyledComplimentScreen = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
  padding-bottom: 60px;
`

export default class ComplimentScreen extends Component {
  render() {
    return (
      <StyledComplimentScreen>
        <ComplimentCard />
      </StyledComplimentScreen>
    )
  }
}
