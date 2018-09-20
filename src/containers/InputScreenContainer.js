import { connect } from 'react-redux'
import { saveCompliment } from '../actions'
import InputScreen from '../components/InputScreen'

const mapDispatchToProps = dispatch => ({
  onSaveCompliment: () => dispatch(saveCompliment()),
})

export default connect(
  null,
  mapDispatchToProps
)(InputScreen)
