import { connect } from 'react-redux'
import ComplimentScreen from '../components/ComplimentScreen'
import {
  loadComplimentsFromServer,
  loadComplimentsToReviewFromServer,
} from '../actions'

const mapStateToProps = state => ({
  compliments: state.compliments,
})

const mapDispatchToProps = dispatch => ({
  loadComplimentsFromServer: () => dispatch(loadComplimentsFromServer()),
  loadComplimentsToReviewFromServer: () =>
    dispatch(loadComplimentsToReviewFromServer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComplimentScreen)
