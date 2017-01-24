import { PropTypes } from 'react'
import RowList from './RowList'
import AddBtn from 'react-icons/lib/fa/plus-circle'
import RemoveBtn from 'react-icons/lib/fa/minus-circle'

const InventoryList =({items,onSelectItem=f=>f,onAddItem=f=>f,onRemoveItem=f=>f,})=>{

      console.log(items);

    return (
        <div>   
            <div>    
                <a onClick={()=>onAddItem }><AddBtn /></a>
                <a onClick={()=>onRemoveItem}><RemoveBtn /></a>
            </div>
            <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th></th>
                        </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        </div>
    )
}

InventoryList.propTypes = {
    items: PropTypes.any.isRequired,
    onSelectItem: PropTypes.func,
    onAddItem: PropTypes.func, 
    onRemoveItem: PropTypes.func
}

export default InventoryList