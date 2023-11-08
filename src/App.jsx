import './App.css'
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (<BrowserRouter>
        <div className='wrapper'>
            <Header></Header>
            <NavBar></NavBar>
            <div className='wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile posts={props.appState.posts} />}/>
                    <Route path='/dialogs' element={<Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>)
}

export default App
