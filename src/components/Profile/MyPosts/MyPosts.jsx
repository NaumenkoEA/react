import s from './MyPosts.module.css'
import Post from "./Posts/Post.jsx";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} text={p.text} likesCount={p.likesCount}/>)
    return (<div className={s.postsBlock}>
        <h3>My Post</h3>
        <div>
            <textarea name="" id="" cols="30" rows="2"></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {postElements}

        </div>
    </div>)
}

export default MyPosts;