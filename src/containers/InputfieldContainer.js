import { connect } from 'react-redux'
import Inputfield from '../components/Inputfield'
import { saveTempComplimentText, saveComplimentToReview } from '../actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
  onSubmit: () => {
    dispatch(saveComplimentToReview())
  },
  onChange: tempCompliment =>
    dispatch(saveTempComplimentText({ tempCompliment })),
})
const container = connect(
  null,
  mapDispatchToProps
)(Inputfield)

export default withRouter(container)
