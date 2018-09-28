import { connect } from 'react-redux'
import ReviewScreen from '../components/ReviewScreen'

const mapStateToProps = state => ({
  complimentsToReview: state.complimentsToReview,
  compliments: state.compliments,
})

export default connect(mapStateToProps)(ReviewScreen)
