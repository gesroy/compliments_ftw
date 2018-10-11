import { connect } from 'react-redux'
import { saveComplimentText, postComplimentToServer } from '../actions'
import ReviewCard from '../components/ReviewCard'

const mapStateToProps = (state, ownProps) => ({
  index: ownProps.index,
  compliment: ownProps.compliment,
  inReviewText: state.inReviewText,
})

const mapDispatchToProps = dispatch => ({
  onSaveComplimentText: (index, inReviewText) =>
    dispatch(saveComplimentText({ index, inReviewText })),
  saveComplimentOnServer: inReviewText =>
    dispatch(postComplimentToServer(inReviewText)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewCard)
