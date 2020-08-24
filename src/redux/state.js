const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        dialogsPage:{
            dialogs: [
                {id: 1, name: "Sveta"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Vasiliy"}
            ],      
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your"},
                {id: 3, message: "Yo"}
            ]
        },      
        profilePage:{
            posts: [
                {id: 1, message: "Hi? how are you?", likesCount: 15},
                {id: 2, message: "It's my firs post", likesCount: 27}
            ],
            newPostText:"it"
        },  
        navbar:{
            friends:[
                {id:1, name:"Sveta"},
                {id:2, name: "Lena"},
                {id:3, name: "Sanya"}
            ]   
        }
    },
    _callSubcsriber(){
        console.log("State changed")
    },
    subscribe (observer) {
        this._callSubcsriber = observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubcsriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubcsriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store