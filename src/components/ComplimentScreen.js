import React, { Component } from 'react'
import styled from 'styled-components'
import kompliment1 from '../images/kompliment1.jpg'
import kompliment2 from '../images/kompliment2.jpg'

const StyledComplimentScreen = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
`
const StyledComplimentCard = styled.div`
  width: 100vw;
  padding-bottom: 20px;
`

export default class ComplimentScreen extends Component {
  render() {
    return (
      <StyledComplimentScreen>
        <StyledComplimentCard>
          <img src={kompliment1} width="100%" />
        </StyledComplimentCard>
        <StyledComplimentCard>
          <img src={kompliment2} width="100%" />
        </StyledComplimentCard>
      </StyledComplimentScreen>
    )
  }
}
