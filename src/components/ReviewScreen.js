import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReviewCard from './ReviewCard'
import styled from 'styled-components'

const StyledReviewCard = styled.div`
  background-color: beige;
`

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
        <div>
          Folgende Komplimente stehen für Dich zum Korrekturlesen bereit. Bitte
          wähle ein Kompliment aus, um es zu bearbeiten. Danke, dass du
          mitmachst!
        </div>
        <section>
          {complimentsToReview.map((compliment, index) => (
            <StyledReviewCard key={index}>{compliment.text}</StyledReviewCard>
          ))}
        </section>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>Zum Home-Screen</Button>
        </Link>
      </React.Fragment>
    )
  }
}
