import { connect } from 'react-redux'
import Inputfield from '../components/Inputfield'
import { saveComplimentText, saveTempComplimentText } from '../actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
  onSubmit: () => {
    dispatch(saveComplimentText())
  },
  onChange: tempCompliment =>
    dispatch(saveTempComplimentText({ tempCompliment })),
})
const container = connect(
  null,
  mapDispatchToProps
)(Inputfield)

export default withRouter(container)
