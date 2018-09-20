import { connect } from 'react-redux'
import Inputfield from '../components/Inputfield'
import { saveCompliment, saveTempCompliment } from '../actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
  onSubmit: () => {
    dispatch(saveCompliment())
  },
  onChange: tempCompliment => dispatch(saveTempCompliment({ tempCompliment })),
})
const container = connect(
  null,
  mapDispatchToProps
)(Inputfield)

export default withRouter(container)
