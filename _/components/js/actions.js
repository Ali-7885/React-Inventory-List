import C from './constants'
import fetch from 'isomorphic-fetch'

export function addItem(itemName, itemCount=1) {
    
    return {
        type: C.ADD_ITEM,
        payload: {itemName,itemCount}
    }
}

export function removeItem (itemName) {

    return {
        type: C.REMOVE_ITEM,
        payload: itemName
    }
}




export function check(){
//    return (dispatch, getState) => {
//    const state = getState()
//    
//    console.log(state);
//  }
//  
      return {
        type: C.ADD_ITEM,
        payload: {itemName,itemCount}
    }
}
