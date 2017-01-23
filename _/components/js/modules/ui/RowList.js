import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class RowList extends Component {

    render() {

	    const { itemName, itemCount } = this.props
        
        return (
            <tr>
                <td>{itemName}</td>
                <td>{itemCount}</td>
                <td><input type="checkbox" onClick={()=>console.log(itemName)}/></td>
            </tr>
        )
    }
}

export default RowList
