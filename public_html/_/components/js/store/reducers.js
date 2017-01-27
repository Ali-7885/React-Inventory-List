import C from '../constants'
import { combineReducers } from 'redux'

export const item = (state=null, action) =>
  (action.type === C.ADD_ITEM) ?
  	action.payload :
  	state

export const items = (state=[], action) => {

  switch(action.type) {

    case C.ADD_ITEM :
      const hasItem = state.some(item => item.itemName.toUpperCase() === action.payload.itemName.toUpperCase())
        if (hasItem){
              let itemToIncreace = state.filter(item => item.itemName.toUpperCase() === action.payload.itemName.toUpperCase())
              itemToIncreace[0].itemCount++
            return [
            ...state.filter(item => item.itemName !== action.payload)
            ]
        }else{
            return [
                ...state
                 ,
                 item(null, action)
                ]
        }

    case C.REMOVE_ITEM :
      return state.filter(item => item.itemName !== action.payload)

    case C.INCREMENT_ITEM_AMOUT :
      let itemToIncreace = state.filter(item => item.itemName === action.payload)
      itemToIncreace[0].itemCount++
      return [
        ...state
      ]

    case C.REDUCE_ITEM_AMOUT :
      let itemToReduce = state.filter(item => item.itemName === action.payload)
      itemToReduce[0].itemCount--
      return [
        ...state
      ]

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
