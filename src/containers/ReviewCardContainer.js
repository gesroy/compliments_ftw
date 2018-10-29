import { connect } from 'react-redux'
import {
  saveComplimentText,
  postComplimentToServer,
  loadComplimentsToReviewFromServer,
  loadComplimentsFromServer,
} from '../actions'
import ReviewCard from '../components/ReviewCard'
import { withRouter } from 'react-router-dom'

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
  loadComplimentsToReviewFromServer: () =>
    dispatch(loadComplimentsToReviewFromServer()),
  loadComplimentsFromServer: () => dispatch(loadComplimentsFromServer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReviewCard))
