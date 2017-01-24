import C from './constants'
import fetch from 'isomorphic-fetch'

export function addItem(itemName, itemCount=1) {

    return {
        type: C.ADD_ITEM,
        payload: {itemName,itemCount}
    }
}

export const removeItem = function(itemName) {

    return {
        type: C.REMOVE_ITEM,
        payload: itemName
    }
}
