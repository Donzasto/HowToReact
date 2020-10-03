import profileReducer from "./profileReducer"
import navbarReducer from "./navbarReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer, 
    navbarPage: navbarReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;