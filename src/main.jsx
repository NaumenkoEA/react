import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store  from "./redux/state.js";

 let rerenderEntireTree =(state)=>{
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
    )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
