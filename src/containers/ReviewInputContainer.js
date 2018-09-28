import { connect } from 'react-redux'
import Inputfield from '../components/Inputfield'
import { saveComplimentText, saveInReviewText } from '../actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
  onSubmit: index => {
    dispatch(saveComplimentText({ index }))
  },
  onChange: inReviewText => dispatch(saveInReviewText({ inReviewText })),
})

const container = connect(
  null,
  mapDispatchToProps
)(Inputfield)

export default withRouter(container)
