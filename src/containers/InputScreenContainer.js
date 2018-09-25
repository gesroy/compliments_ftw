import { connect } from 'react-redux'
import { saveComplimentToReview } from '../actions'
import InputScreen from '../components/InputScreen'

const mapDispatchToProps = dispatch => ({
  onSaveComplimentToReview: () => dispatch(saveComplimentToReview()),
})

export default connect(
  null,
  mapDispatchToProps
)(InputScreen)
