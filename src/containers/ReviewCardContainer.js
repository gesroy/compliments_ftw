import { connect } from 'react-redux'
import { saveComplimentText } from '../actions'
import ReviewCard from '../components/ReviewCard'

const mapStateToProps = (state, ownProps) => ({
  index: ownProps.index,
  compliment: ownProps.compliment,
})

const mapDispatchToProps = dispatch => ({
  onSaveComplimentText: (index, compliment) =>
    dispatch(saveComplimentText({ index, compliment })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewCard)
