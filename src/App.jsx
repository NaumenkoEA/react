// import { useState } from 'react'
import Header from "./components/Header.jsx";
import './App.css'
import SideBar from "./components/SideBar.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
        <div className='wrapper'>
            <Header></Header>
            <SideBar></SideBar>
            <Profile></Profile>
        </div>
    </>
  )
}

export default App
