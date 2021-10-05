import axios from 'axios';
import { useSelector } from 'react-redux';
import * as types from './actionsTypes';

export const fetchAllItems = () =>{
    debugger
    return async dispatch =>{
        const res = await fetch(`http://localhost:3002/productItems`)
        const jsonData = await res.json();
        dispatch({
            type: types.FETCH_ALL_ITEMS,
            payload: jsonData
        })
    }
}
export const fetchAllItemsSearch = (textSearh) =>{
    debugger
    return async dispatch =>{
        const res = await fetch(`http://localhost:3002/productItems`)
        const jsonData = await res.json();
        let newItems = jsonData.filter((item) => item.includes(textSearh));
        console.log('newItems: ', newItems);
        dispatch({
            type: types.FETCH_ALL_ITEMS,
            payload: newItems
        })
    }
}

export const updateSearchField = (searchTerm) => {
    debugger
    return{
        type: types.UPDATE_SEARCH_FIELD,
        payload: searchTerm
    }
}

export const fetchItemsBySearch = (items, searchTerm) => {

    debugger
    let newItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    debugger
    return{
        type: types.UPDATE_SEARCH_ITEMS,
        payload: newItems
    }
}

export const addItemInCart = (item, commonPrice, itemsInCart) => {
    
    commonPrice += item.price;
    return{
        type: types.ADD_ITEM_IN_CART,
        payload: {item, commonPrice}
    }

}

export const deleteItemFromCart = (item, itemsInCart, commonPrice) => {

    let newItemsInCart = itemsInCart.filter((i) => i.id !== item.id);
    let priceForSubtraction = item.price * item.quantity;
    console.log('deleteItem: ', priceForSubtraction);
    commonPrice -= priceForSubtraction
    return{
        type: types.DELETE_ITEM_FROM_CART,
        payload: {newItemsInCart, commonPrice}
        
    }
}
// export const minusItemFromCart = (item, itemsInCart, commonPrice) => {


//     let newItemsInCart = itemsInCart.filter((i) => i.id !== item.id);

//     let itemForChange = itemsInCart.filter((i) => i.id === item.id);
//     itemForChange.quntity = itemForChange.quntity - 1;


//     commonPrice -= item.price
//     return{
//         type: types.MINUS_ITEM,
//         payload: 
//     }

// }

export const setCommonPrice = (commonPrice) => {
    return{
        type: types.SET_COMMON_PRICE,
        payload: commonPrice
    }
}
