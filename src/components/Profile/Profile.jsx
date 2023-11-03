//import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
    return (
        <div >
            <div >
                <img src="https://p4.wallpaperbetter.com/wallpaper/393/784/907/nature-photography-ultra-wide-wallpaper-preview.jpg" alt=''/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile