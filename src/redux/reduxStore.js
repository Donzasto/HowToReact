import profileReducer from "./profileReducer"
import navbarReducer from "./navbarReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    profilePage: profileReducer, 
    navbarPage: navbarReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;