import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default class ReviewScreen extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>Zum Home-Screen</Button>
        </Link>
      </div>
    )
  }
}
