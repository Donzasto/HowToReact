import profileReducer from "./profileReducer"
import navbarReducer from "./navbarReducer"
import dialogsReducer from "./dialogsReducer"
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer, 
    navbarPage: navbarReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;