import InventoryList from './containers/InventoryList'

export const IndexPage = ({children}) => 
    <div >
        <h1>Inventory List</h1>
        {children}
        <InventoryList/>
    </div>