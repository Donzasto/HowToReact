import profileReducer from "./profileReducer"
import navbarReducer from "./navbarReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from "./usersReducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer, 
    navbarPage: navbarReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;