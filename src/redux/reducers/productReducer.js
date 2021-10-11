import * as types from './../actionsTypes';

const initialState = {
    productsArr: [],
    exactlyAllProducts: [],
    product: {},
    searchFiled: '',
    pageSize: 3,
    totalItemsCount: 20,
    currentPage: 1,
    nameCommentator: '',
    textComment: '',
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
        case types.UPDATE_INPUT:
            return{
                ...state,
                nameCommentator: action.payload
            }
        case types.UPDATE_TEXTAREA:
            return{
                ...state,
                textComment: action.payload
            }
        case types.FETCH_EXACT_ALL_ITEMS:
            return{
                ...state,
                exactlyAllProducts: action.payload
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
        case types.FETCH_PRODUCT:
            return{
                ...state,
                product: action.payload
            }




            
        case types.CHANGE_RATION:
            return{
                ...state,
                productsArr: action.payload
            }











        case types.ADD_NEW_COMMENT:

            debugger
            let id = action.payload.productId
            let name = action.payload.nameCommentator
            let comment = action.payload.textComment
            let productsArr = action.payload.productsArr
            let temp = productsArr.filter((item) => item.id === id);
            temp.comments.push(comment);
            
            debugger
            // найти объет с этим id и добавить ему свойтсова



            return{
                ...state,
                product: action.payload
            }


    
        default:
            return state
    }
}

