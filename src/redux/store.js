import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Sveta" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Vasiliy" }
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your" },
                { id: 3, message: "Yo" }
            ],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hi? how are you?", likesCount: 15 },
                { id: 2, message: "It's my firs post", likesCount: 27 }
            ],
            newPostText: "it"
        },
        navbar: {
            friends: [
                { id: 1, name: "Sveta" },
                { id: 2, name: "Lena" },
                { id: 3, name: "Sanya" }
            ]
        }
    },
    _callSubcsriber() {
        console.log("State changed")
    },
    subscribe(observer) {
        this._callSubcsriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {

        profileReducer(this._state.profilePage, action);
        sidebarReducer(this._state.navbar, action);
        dialogsReducer(this._state.dialogsPage, action);

        this._callSubcsriber(this._state);

    }
}

export default store