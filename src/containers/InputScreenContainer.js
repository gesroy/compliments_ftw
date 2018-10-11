import { connect } from 'react-redux'
import {
  saveComplimentToReview,
  postComplimentToReviewToServer,
  loadComplimentsToReviewFromServer,
} from '../actions'
import InputScreen from '../components/InputScreen'

const mapStateToProps = state => ({
  tempCompliment: state.tempCompliment,
})

const mapDispatchToProps = dispatch => ({
  onSaveComplimentToReview: () => dispatch(saveComplimentToReview()),
  saveComplimentToReviewOnServer: tempCompliment =>
    dispatch(postComplimentToReviewToServer(tempCompliment)),
  loadComplimentsToReviewFromServer: () =>
    dispatch(loadComplimentsToReviewFromServer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputScreen)
