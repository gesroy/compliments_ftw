import { connect } from 'react-redux'
import { saveComplimentText } from '../actions'
import ReviewScreen from '../components/ReviewScreen'

const mapStateToProps = state => ({
  complimentsToReview: state.complimentsToReview,
  compliments: state.compliments,
})

const mapDispatchToProps = dispatch => ({
  onSaveComplimentText: () => dispatch(saveComplimentText()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewScreen)
