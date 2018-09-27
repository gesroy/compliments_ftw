import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReviewCardContainer from '../containers/ReviewCardContainer'

export default class ReviewScreen extends Component {
  static propTypes = {
    complimentsToReview: PropTypes.arrayOf(PropTypes.object).isRequired,
    compliments: PropTypes.arrayOf(PropTypes.object),
    index: PropTypes.number,
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
            <ReviewCardContainer
              key={index}
              index={index}
              compliment={compliment.text}
            />
          ))}
        </section>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>Abbrechen</Button>
        </Link>
      </React.Fragment>
    )
  }
}
