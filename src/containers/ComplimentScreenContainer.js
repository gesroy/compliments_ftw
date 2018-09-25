import { connect } from 'react-redux'
import ComplimentScreen from '../components/ComplimentScreen'

const mapStateToProps = state => ({
  compliments: state.compliments.compliments,
})

export default connect(mapStateToProps)(ComplimentScreen)
