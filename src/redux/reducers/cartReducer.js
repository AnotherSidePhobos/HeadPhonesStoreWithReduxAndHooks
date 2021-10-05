import * as types from './../actionsTypes';


let initialState = {
    itemsInCart: [],
    commonPrice: 0
}

const IsExistInCart = (itemsInCart, item) => {
    const existingCartItem = itemsInCart.find(
        itemsInCart => itemsInCart.id === item.id
    );
    if (existingCartItem) {
        return itemsInCart.map(itemsInCart => 
            itemsInCart.id === item.id
            ? { ...itemsInCart, quantity: itemsInCart.quantity + 1}
            : itemsInCart
        );
      }

      return[
          ...itemsInCart,
          {
              ...item,
              quantity: 1
          }
      ];
} 

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_ITEM_IN_CART:
            debugger
            let price = state.commonPrice += Number(action.payload.item.price);
            return{
                ...state,
                //itemsInCart: [...state.itemsInCart, action.payload.item],
                itemsInCart: IsExistInCart(state.itemsInCart, action.payload.item),
                commonPrice: price
            }
        case types.DELETE_ITEM_FROM_CART:
            return{
                ...state,
                itemsInCart: action.payload.newItemsInCart,
                commonPrice: action.payload.commonPrice
            }
        default:
            return state
    }
}
export default cartReducer;