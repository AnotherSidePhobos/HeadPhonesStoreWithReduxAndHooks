import axios from 'axios';
import { useSelector } from 'react-redux';
import * as types from './actionsTypes';

export const fetchAllItems = (currentPage, pageSize) =>{
    return async dispatch =>{
        const res = await fetch(`http://localhost:3002/productItems?_page=${currentPage}&_limit=${pageSize}`)
        const jsonData = await res.json();
        dispatch({
            type: types.FETCH_ALL_ITEMS,
            payload: jsonData
        })
    }
}
export const setAllItemsCount = () =>{
    debugger


    return async dispatch =>{
        const res = await fetch(`http://localhost:3002/productItems`)
        const jsonData = await res.json();
        dispatch({
            type: types.SET_ALL_ITEMS_COUNT,
            jsonData
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
export const setCurrentPage = (currentPage) => {
    debugger
    return{
        type: types.SET_CURRENT_PAGE,
        payload: currentPage
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
export const minusItemFromCart = (item, itemsInCart, commonPrice) => {

    debugger
    
    let newItemsCart;
    let itemForChange = itemsInCart.filter((i) => i.id === item.id)[0];
    if (itemForChange.quantity > 1) {
        itemForChange.quantity = Number(itemForChange.quantity - 1);
        
    }else if (itemForChange.quantity == 1){
        debugger
        newItemsCart = itemsInCart.filter((item) => item.id !== itemForChange.id);
        itemsInCart = newItemsCart
    }
    commonPrice -= item.price
    return{
        type: types.MINUS_ITEM,
        payload: {itemsInCart, commonPrice}
    }

}
export const plusItemFromCart = (item, itemsInCart, commonPrice) => {

    debugger
    
    let itemForChange = itemsInCart.filter((i) => i.id === item.id)[0];
    // if (itemForChange.quantity > 1) {
    //     itemForChange.quantity = Number(itemForChange.quantity + 1);
        
    // }
    // else if (itemForChange.quantity == 1){
    //     debugger
    //     newItemsCart = itemsInCart.filter((item) => item.id !== itemForChange.id);
    //     itemsInCart = newItemsCart
    // }
    itemForChange.quantity = Number(itemForChange.quantity + 1);
    commonPrice += item.price
    return{
        type: types.MINUS_ITEM,
        payload: {itemsInCart, commonPrice}
    }

}

export const setCommonPrice = (commonPrice) => {
    return{
        type: types.SET_COMMON_PRICE,
        payload: commonPrice
    }
}
