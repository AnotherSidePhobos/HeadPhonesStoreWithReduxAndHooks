import * as types from './../actionsTypes';

const initialState = {
    productsArr: [],
    searchFiled: ''
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_ITEMS:
            debugger
            console.log(action.payload);
            return{
                ...state,
                productsArr: action.payload
            }
        case types.UPDATE_SEARCH_FIELD:
            return{
                ...state,
                searchFiled: action.payload
            }
        case types.UPDATE_SEARCH_ITEMS:
            return{
                ...state,
                productsArr: action.payload
            }
    
        default:
            return state
    }
}

