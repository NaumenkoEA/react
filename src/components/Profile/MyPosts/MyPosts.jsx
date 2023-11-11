import s from './MyPosts.module.css'
import Post from "./Posts/Post.jsx";
import React from "react";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post text={p.text} likesCount={p.likesCount}/>)

    let newPost = React.createRef();

    let addPost =() =>{
        props.addPost()

    }

    let onPostChange =()=>{
        let text =newPost.current.value
        props.updateNewPostText(text)
    }

    return (<div className={s.postsBlock}>
        <h3>My Post</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}></textarea>

        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postElements}

        </div>
    </div>)
}

export default MyPosts;