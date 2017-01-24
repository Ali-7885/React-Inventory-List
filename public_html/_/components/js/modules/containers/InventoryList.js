import InventoryList from '../ui/InventoryList'
import { connect } from 'react-redux'
import { addItem , removeItem } from '../../actions'
import { PropTypes } from 'react'

const mapStateToProps = (state, props) => 
  ({
   items:  state.items,
   selectedItems: state.selectedItems
   
  })

const mapDispatchToProps = (disptach) => 
  ({  
    onSelectItem(itemName) {
        console.log('onSelectItem - - '+itemName)
//        store.getState().selectedItems.has(itemName.trim())?
        
    },
    
    onAddItem( ) {
        if (store.getState().selectedItems.length<1){

        document.location.href = '/#/add'
        }else{
            disptach(
                 addItem('something new')
            )
        }
    },
    
    onRemoveItem(itemName) {
        console.log('onRemoveItem')
        disptach(
            removeItem('something new')
        )
    }
 
  })  

export default connect(mapStateToProps,mapDispatchToProps)(InventoryList)  
