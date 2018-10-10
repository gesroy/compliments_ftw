import { connect } from 'react-redux'
import ReviewScreen from '../components/ReviewScreen'
import { loadComplimentsToReviewFromServer } from '../actions'

const mapStateToProps = state => ({
  complimentsToReview: state.complimentsToReview,
  compliments: state.compliments,
})

const mapDispatchToProps = dispatch => ({
  loadComplimentsToReviewFromServer: () =>
    dispatch(loadComplimentsToReviewFromServer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewScreen)
