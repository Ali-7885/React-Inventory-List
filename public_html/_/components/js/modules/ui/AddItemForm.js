import { PropTypes } from 'react'

export const AddItemForm = ({ onNewItem=f=>f, router}) => {

    let _itemName

    const submit = e => {
        e.preventDefault()
        onNewItem({
            itemName: _itemName.value,
            itemCount: 1
        })

       router.push('/')
        _itemName.value = ''
    }

    return (
        <form onSubmit={submit} >
            <label htmlFor="item-name"> Name Item</label>
            <input id="item-name" type="text" ref={(input) => _itemName = input } />     
            <button>Add Item</button>
        </form>
    )
}
AddItemForm.propTypes = {
    onNewItem: PropTypes.func,
    router: PropTypes.object
}