import * as types from './../actionsTypes';

const initialState = {
    productsArr: [],
    searchFiled: '',
    pageSize: 3,
    totalItemsCount: 20,
    currentPage: 1
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {


        case types.SET_ALL_ITEMS_COUNT:

            debugger
            console.log('json data:');
            console.log(action.jsonData.length);
            return{
                ...state,
                totalItemsCount: action.jsonData.length
            }

        case types.FETCH_ALL_ITEMS:
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
        case types.SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }

    
        default:
            return state
    }
}

