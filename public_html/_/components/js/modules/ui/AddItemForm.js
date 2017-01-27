import { PropTypes } from 'react'
import { addItem } from '../../actions'
import C from './../../constants'

export const AddItemForm = ({ onAddItem=f=>f, router}) => {

    let _itemName

    const submit = e => {
      e.preventDefault()
      if(_itemName.value!=""){
        store.dispatch(
          addItem(_itemName.value.trim(),1)
        )
        _itemName.value = ''
        router.push('/')
      }
    }

    return (
      <div className="InventoryListForm">
        <form onSubmit={submit} >
          <div className="form-group">
            <label htmlFor="item-name">Name Item</label>
            <input className="form-control" id="item-name" type="text" ref={(input) => _itemName = input } />
          </div>
          <button className="btn btn-default" >Add Item</button>
        </form>
      </div>
    )
}
AddItemForm.propTypes = {
    onAddItem: PropTypes.func,
    router: PropTypes.object
}

export default AddItemForm
