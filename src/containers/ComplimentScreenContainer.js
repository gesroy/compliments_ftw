import { connect } from 'react-redux'
import ComplimentScreen from '../components/ComplimentScreen'
import { loadComplimentsFromServer } from '../actions'

const mapStateToProps = state => ({
  compliments: state.compliments,
})

const mapDispatchToProps = dispatch => ({
  loadComplimentsFromServer: () => dispatch(loadComplimentsFromServer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComplimentScreen)
