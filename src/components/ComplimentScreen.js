import React, { Component } from 'react'
import styled from 'styled-components'
import ComplimentCard from './ComplimentCard'
import PropTypes from 'prop-types'
import imageArray from './ImageLoader'

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
  static propTypes = {
    compliments: PropTypes.array,
    index: PropTypes.number,
  }

  render() {
    const { compliments } = this.props
    return (
      <StyledComplimentScreen data-test-id="ComplimentCard">
        {compliments.map((compliment, index) => (
          <ComplimentCard
            key={index}
            compliment={compliment.text}
            image={imageArray[index]}
          />
        ))}
      </StyledComplimentScreen>
    )
  }
}
