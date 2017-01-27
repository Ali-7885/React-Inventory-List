import AddItemForm from '../ui/AddItemForm'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) =>
  ({
    items:  state.items
  })

const mapDispatchToProps = (disptach) =>({})

export default connect(mapStateToProps,mapDispatchToProps)(AddItemForm)
