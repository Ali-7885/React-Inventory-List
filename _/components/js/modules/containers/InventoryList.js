import InventoryList from '../ui/InventoryList'
import { connect } from 'react-redux'
import { removeItem } from '../../actions'

const mapStateToProps = (state, props) => 
  ({
   items:  state.items
  })


const mapDispatchToProps = disptach => 
  ({
     onSelectItem(itemName) {
        console.log('onSelectItem - - ')
      //disptach(
       // removeItem(itemName)
     // )
    },
    onAddItem(itemName) {
        console.log('onAddItem')
    },
    onRemoveItem(itemName) {
        console.log('onRemoveItem')
    }
 
  })  

export default connect(mapStateToProps,mapDispatchToProps)(InventoryList)  
