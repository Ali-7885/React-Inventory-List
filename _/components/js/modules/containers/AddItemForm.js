import AddItemForm from '../ui/AddItemForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addItem  } from '../../actions'

const mapStateToProps = (state, props) => 
  ({
    items:  state.items
  })

const mapDispatchToProps = (disptach) => 
  ({  
    onAddItem(itemName) {    
      
            disptach(
                 addItem(itemName)
            )
//      document.location.href = '/'
    }
})  

export default connect(mapStateToProps,mapDispatchToProps)(AddItemForm) 
    
export default withRouter(Container)