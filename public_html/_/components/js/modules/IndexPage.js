import InventoryList from './containers/InventoryList'

export const IndexPage = ({children}) =>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 col-xs-12">
          <h1 className="InventoryListTitle">Inventory List</h1>
          {children}
          <InventoryList className="InventoryListBody"/>
        </div>
      </div>
    </div>
