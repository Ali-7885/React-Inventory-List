import FaShield from 'react-icons/lib/fa/shield'
import { PropTypes } from 'react'

const RowList = ({ itemName, itemCount, onSelectItem=f=>f }) =>
    <tr>
        <td>{itemName}</td>
        <td>{itemCount}</td>
        <td><input type="checkbox"
            onClick={()=>onSelectItem(itemName)}/>
        </td>
    </tr>

RowList.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemCount: PropTypes.number.isRequired,
    onSelectItem: PropTypes.func
}

export default RowList
