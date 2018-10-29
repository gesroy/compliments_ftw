import { connect } from 'react-redux'
import UserScreen from '../components/UserScreen'

const mapStateToProps = state => ({
  compliments: state.compliments,
})

export default connect(
  mapStateToProps,
  null
)(UserScreen)
