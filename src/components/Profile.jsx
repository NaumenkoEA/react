import './Profile.css'

const Profile=() =>{
    return(
        <div className='profile'>
            <div className='profile-img'>
                <img src="https://p4.wallpaperbetter.com/wallpaper/393/784/907/nature-photography-ultra-wide-wallpaper-preview.jpg" alt=""/>
            </div>
            <div className='info-profile'>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbiNwu3xwWdHxahsMVfcQkbs40gxtuiwglw&usqp=CAU" alt=""/>
                <div>
                    Evgeniy Naumenko
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eaque enim error eum exercitationem illum incidunt molestias nesciunt nihil nisi nostrum numquam officiis perspiciatis quibusdam quidem quis, quos saepe, unde.</p>
            </div>
            <div className='posts'>
                <div>
                    New Post!!
                </div>
            </div>
        </div>
    )
}

export default Profile