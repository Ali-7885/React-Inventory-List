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

export const increaseItem = () => (disptach,getState) => {
  store.getState().selectedItems.forEach ( itemName => {
    disptach(
      increaseItemRun(itemName)
    )
  })
}

export const increaseItemRun = (itemName) => {
    return {
        type: C.INCREMENT_ITEM_AMOUT,
        payload: itemName
    }
}

export const reduceItem = () => (disptach,getState) => {
  store.getState().selectedItems.forEach ( itemName => {
    let _item= store.getState().items
               .filter(item => item.itemName === itemName)[0]

    if(_item.itemCount<=1){
         console.log(_item.itemCount)
      disptach(
        removeItem(itemName)
      )
      disptach(
        selectedItems(itemName)
      )
    }else {
      disptach(
        reduceItemRun(itemName)
      )
    }
  })
}

export const reduceItemRun = (itemName) => {
    return {
        type: C.REDUCE_ITEM_AMOUT,
        payload: itemName
      }
  }

export function selectedItems(itemName){
   if(store.getState().selectedItems.includes(itemName)){
     return {
       type: C.REMOVE_FROM_SELECT_ITEM,
       payload: itemName
     }
    }else{
      return {
        type: C.ADD_TO_SELECT_ITEM,
        payload: itemName
      }
    }
}
