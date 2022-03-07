import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import{composeWithDevTools} from 'redux-devtools-extension'
import{getAllPizzaReducer} from './reducers/pizzaReducers'
import {cartReducer} from "./reducers/cartReducer";
import { registerUserReducer } from './reducers/userReducer';
import { loginUserReducer } from './reducers/userReducer';
import { placeOrderReducer } from './reducers/orderReducer';




const rootReducer =combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer
})



const cartItems = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItems')) 
 : []
 console.log(cartItems)

 const currentUser = localStorage.getItem('currentUser')
 ? JSON.parse(localStorage.getItem('currentUser'))
 : null



 
const initialState = {
    cartReducer :{
        cartItems :cartItems,
    },
    loginUserReducer:{
        currentUser:currentUser
    }
};






const middleware = [thunk]






const store = createStore(rootReducer ,initialState ,composeWithDevTools(applyMiddleware(...middleware)))
export default store;