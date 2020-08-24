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
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubcsriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubcsriber(this._state);
    },
    subscribe (observer) {
        this._callSubcsriber = observer;
    },
    getState(){
        return this._state;
    }
}

export default store