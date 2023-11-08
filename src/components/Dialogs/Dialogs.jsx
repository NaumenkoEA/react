import s from './Dialogs.module.css'
import React from "react";
import Dialog from "./Dialog/Dialog.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)

    let messageElements = props.state.messages.map(m => <Message id={m.id} text={m.text}/>)


    return (<div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogElements}
        </div>
        <div className={s.messages}>
            {messageElements}
        </div>
    </div>)
}
export default Dialogs;