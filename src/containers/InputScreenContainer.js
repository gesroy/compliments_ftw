import { connect } from 'react-redux'
import { saveComplimentText } from '../actions'
import InputScreen from '../components/InputScreen'

const mapDispatchToProps = dispatch => ({
  onSaveComplimentText: () => dispatch(saveComplimentText()),
})

export default connect(
  null,
  mapDispatchToProps
)(InputScreen)
