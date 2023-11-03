import s from './MyPosts.module.css'
import Post from "./Posts/Post.jsx";

const MyPosts = () => {
    return (
        <div>
            My Post
            <div className={s.posts}>
                <Post message='How are you?'/>
                <Post message='Im fine'/>
            </div>
        </div>
    )
}

export default MyPosts;