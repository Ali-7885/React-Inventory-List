import C from '../constants'
import { combineReducers } from 'redux'

/*export const item = (state=null, action) => 
  (action.type === C.ADD_ITEM) ?
  	action.payload :
  	state*/

export const items = (state=[], action) => {

  switch(action.type) {
           
    case C.ADD_ITEM : 
        return [
        ...state,action.payload
        ].sort((a, b) => new Date(b.itemName) - new Date(a.itemName))
      /*const hasDay = state.some(item => item.itemName === action.payload.itemName)

      return (hasDay) ?
         state :
         [
           ...state,
           item(null, action)
         ].sort((a, b) => new Date(b.itemName) - new Date(a.itemName))*/

    case C.REMOVE_ITEM :

      return state.filter(item => item.itemName !== action.payload)     

    default:
      return state
  }

}


export default combineReducers({
  items
})




