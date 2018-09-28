import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.textarea`
  border: 1px solid #333;
  border-radius: 3px;
  font-size: 1em;
  margin: 20px 20px 20px 0;
`

export default class Inputfield extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    compliment: PropTypes.string,
    index: PropTypes.number,
    onSaveComplimentText: PropTypes.func,
    children: PropTypes.any,
  }

  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    const input = event.target
    const { onChange } = this.props
    this.setState({
      inputValue: input.value,
    })
    onChange && onChange(input.value)
  }

  checkForEnterButton = event => {
    const { inputValue } = this.state
    if (event.key === 'Enter' && inputValue) {
      this.props.onSubmit(inputValue)
      this.setState({
        inputValue: '',
      })
    }
  }

  render() {
    return (
      <StyledInput
        onChange={this.updateInputValue}
        onKeyUp={this.checkForEnterButton}
        value={this.state.inputValue || this.props.children}
        name="complimentInput"
        autoFocus
        placeholder="Wir freuen uns auf dein Kompliment"
        type="text"
        rows="6"
        minlength="10"
        maxLength="300"
      />
    )
  }
}
