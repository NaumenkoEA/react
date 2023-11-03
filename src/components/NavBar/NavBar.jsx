import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}><a href='/profile'>Profile</a></div>
            <div className={s.item}><a href='dialogs'>Messages</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </div>
    )
}

export default NavBar