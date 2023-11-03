// import { useState } from 'react'

import './App.css'
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";

function App() {
    return (
        <>
            <div className='wrapper'>
                <Header></Header>
                <NavBar></NavBar>
                {/*<Profile></Profile>*/}
                <div className='wrapper-content'>
                    <Dialogs/>
                </div>

            </div>
        </>
    )
}

export default App
