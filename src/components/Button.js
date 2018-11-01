import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  background-color: beige;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  border-radius: 8px;
  margin: 7px;
`

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
  }

  render() {
    return (
      <StyledButton
        onClick={this.props.onClick}
        data-test-id={this.props.children}
      >
        {this.props.children}
      </StyledButton>
    )
  }
}
