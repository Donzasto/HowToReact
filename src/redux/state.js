import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state