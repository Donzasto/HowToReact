import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
    }
    
    return (
        <div className={s.postsBlock}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>)
}

export default MyPosts;