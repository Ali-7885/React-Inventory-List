import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import RowList from './RowList'
import AddBtn from 'react-icons/lib/fa/plus-circle'
import RemoveBtn from 'react-icons/lib/fa/minus-circle'

class InventoryList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
            {
                itemName: "PC",
                itemCount: 2
            },
            {
                itemName: "MAC",
                itemCount: 4
            }
          ]
        }
    }

    render() {
    	const { items } = this.state
        return (
            <div>
                <h1>Inventory List</h1>
                <div>
                
                    <a onClick={()=>console.log("addItems")}><AddBtn /></a>
                    <a onClick={()=>console.log("removeItems")}><RemoveBtn /></a>
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
                    {items.map(
                	    (data, i) => 
                		    <RowList key={i} {...data} />
                	 )}
                     </tbody>
                </table>
            </div>
        )
    }
}

export default InventoryList