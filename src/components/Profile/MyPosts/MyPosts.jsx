import s from './MyPosts.module.css'
import Post from "./Posts/Post.jsx";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="2"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='How are you?'/>
                <Post message='Im fine'/>
            </div>
        </div>
    )
}

export default MyPosts;