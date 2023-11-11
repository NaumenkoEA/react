import s from './Dialogs.module.css'
import React from "react";
import MyMessages from "./Messages/MyMessages.jsx";
import MyDialogs from "./MyDialogs/MyDialogs.jsx";

const Dialogs = (props) => {


    return (
        <div className={s.dialogs}>
            <MyDialogs
                dialogs={props.dialogsPage.dialogs}
                dispatch={props.dispatch}
            />

            <MyMessages
                messages={props.dialogsPage.messages}
                newMessage={props.dialogsPage.newMessage}
                dispatch={props.dispatch}
            />
        </div>)
}
export default Dialogs;