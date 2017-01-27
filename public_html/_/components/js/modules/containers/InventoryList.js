import InventoryList from '../ui/InventoryList'
import { connect } from 'react-redux'
import { addItem , removeItem ,selectedItems,
         increaseItem,reduceItem} from '../../actions'
import { PropTypes } from 'react'

const mapStateToProps = (state, props) =>
  ({
   items:  state.items,
   selectedItems: state.selectedItems

  })

const mapDispatchToProps = (disptach) =>
  ({
    onSelectItem(itemName) {
        disptach(
          selectedItems(itemName)
        )
    },

    onAddItem() {
      if(store.getState().selectedItems.length<1){
        document.location.href = '/#/add'
      }else{
        disptach(
          increaseItem()
         )
       }
    },

    onRemoveItem(itemName) {
      if(store.getState().selectedItems.length>0){
        disptach(
            reduceItem()
        )
      }
    }

  })

export default connect(mapStateToProps,mapDispatchToProps)(InventoryList)
