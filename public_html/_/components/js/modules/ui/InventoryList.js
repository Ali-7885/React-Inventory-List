import { PropTypes } from 'react'
import RowList from './RowList'
import AddBtn from 'react-icons/lib/fa/plus-circle'
import RemoveBtn from 'react-icons/lib/fa/minus-circle'

const InventoryList =({items,onSelectItem=f=>f,onAddItem=f=>f,onRemoveItem=f=>f})=>{

    return (
        <div>
            <div className="InventoryListAction text-center">
                <a className="btn btn-primary col-md-5 pull-left" onClick={onAddItem}><AddBtn /></a>
                <a className="btn btn-danger col-md-5 pull-right " onClick={onRemoveItem}><RemoveBtn /></a>
            </div>
            <table className="table table-hover InventoryListTable">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th></th>
                        </tr>
                </thead>
                <tbody>
                   {items.map(
                    (data, i) =>
                   <RowList key={i} {...data} onSelectItem={onSelectItem}/>)}

                </tbody>
            </table>
        </div>
    )
}

InventoryList.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItems:PropTypes.array,
    onSelectItem: PropTypes.func,
    onAddItem: PropTypes.func,
    onRemoveItem: PropTypes.func
}

export default InventoryList
