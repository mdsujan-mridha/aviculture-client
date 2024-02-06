import { cartReducer } from "./component/reducer/cartReducer";
import { userReducer } from "./component/reducer/userReducer";
import { legacy_createStore as createStore } from "redux";
const { combineReducers, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");


const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ?
            JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};

const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;