import { combineReducers } from "redux";
import {productReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';


const rootReducers = combineReducers({
    products: productReducer,
    carts: cartReducer
})

export default rootReducers;