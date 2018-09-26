import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReviewCard from './ReviewCard'

export default class ReviewScreen extends Component {
  static propTypes = {
    complimentsToReview: PropTypes.arrayOf(PropTypes.object).isRequired,
    compliments: PropTypes.arrayOf(PropTypes.object),
    index: PropTypes.number,
    onSaveComplimentText: PropTypes.func,
  }

  render() {
    const { complimentsToReview } = this.props
    return (
      <React.Fragment>
        <p>
          Folgende Komplimente stehen für Dich zum Korrekturlesen bereit. Bitte
          wähle ein Kompliment aus, um es zu bearbeiten. Danke, dass du
          mitmachst!
        </p>
        <section>
          {complimentsToReview.map((compliment, index) => (
            <ReviewCard key={index} compliment={compliment.text} />
          ))}
        </section>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>Zum Home-Screen</Button>
        </Link>
      </React.Fragment>
    )
  }
}
