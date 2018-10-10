import { connect } from 'react-redux'
import { saveComplimentText, myAction } from '../actions'
import ReviewCard from '../components/ReviewCard'

const mapStateToProps = (state, ownProps) => ({
  index: ownProps.index,
  compliment: ownProps.compliment,
  inReviewText: state.inReviewText,
})

const mapDispatchToProps = dispatch => ({
  onSaveComplimentText: (index, inReviewText) =>
    dispatch(saveComplimentText({ index, inReviewText })),
  createCompliment: inReviewText => dispatch(myAction(inReviewText)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewCard)
