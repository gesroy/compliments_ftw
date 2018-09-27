import { connect } from 'react-redux'
import Inputfield from '../components/Inputfield'
import { saveComplimentText } from '../actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
  onSaveComplimentText: index => dispatch(saveComplimentText({ index })),
})

const container = connect(
  null,
  mapDispatchToProps
)(Inputfield)

export default withRouter(container)
