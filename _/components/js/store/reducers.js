import C from '../constants'
import { combineReducers } from 'redux'

export const item = (state=null, action) => 
  (action.type === C.ADD_ITEM) ?
  	action.payload :
  	state

export const items = (state=[], action) => {

  switch(action.type) {
           
    case C.ADD_ITEM : 
//        return [
//        ...state,action.payload
//        ].sort((a, b) => new Date(b.itemName) - new Date(a.itemName))
        
      const hasItem = state.some(item => item.itemName === action.payload.itemName)

        if (hasItem){ 
             console.log('this is herer');
             console.log(state.filter(item => item.itemName !== action.payload) );
            return [
            ...state.filter(item => item.itemName !== action.payload) 
            ]
        }else{
            return [
                ...state,
                item(null, action)
                ]
        }
            
    case C.REMOVE_ITEM :

      return state.filter(item => item.itemName !== action.payload)     

    default:
      return state
  }

}

export const selectedItems = (state=[], action) => {
  switch(action.type) {
    case C.ADD_TO_SELECT_ITEM :
    	return [
         ...state,
         action.payload
    	]
    case C.REMOVE_FROM_SELECT_ITEM : 
      return state.filter(itemName => itemName !== action.payload)
  	default: 
  		return state
  }
}

export default combineReducers({
  items,selectedItems
})




