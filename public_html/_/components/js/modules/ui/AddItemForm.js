import React,{ PropTypes } from 'react'

const AddItemForm = ({ onNewItem=f=>f, router}) => {
//const AddItemForm = () => {
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
        <form onSubmit={submit} >something
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

export default AddItemForm

/*export const AddItemForm = () =>
     <form onSubmit={submit} >something
            <label htmlFor="item-name"> Name Item</label>
            <input id="item-name" type="text"  />     
            <button>Add Item</button>
        </form>
*/