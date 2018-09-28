import { connect } from 'react-redux'
import { saveComplimentText } from '../actions'
import ReviewCard from '../components/ReviewCard'

const mapStateToProps = (state, ownProps) => ({
  index: ownProps.index,
  compliment: ownProps.compliment,
  inReviewText: ownProps.inReviewText,
})

const mapDispatchToProps = dispatch => ({
  onSaveComplimentText: (index, inReviewText) =>
    dispatch(saveComplimentText({ index, inReviewText })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewCard)
