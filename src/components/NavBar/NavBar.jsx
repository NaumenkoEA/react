import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friend.jsx";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div >
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }> Profile</NavLink>
            </div>
            <div >
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }> Messages</NavLink>
            </div>
            <div >
                <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }> News</NavLink>
            </div>
            <div >
                <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }> Music</NavLink>
            </div>
            <div >
                <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }> Settings</NavLink>
            </div>
            <div className={s.friendsBar}>
                <h3><NavLink to='/friends' className = { navData => navData.isActive ? s.active : s.item }> Friends</NavLink></h3>
                <Friends/>
            </div>

        </nav>
    )
}

export default NavBar