import s from './Dialogs.module.css'
import React from "react";
import Dialog from "./Dialog/Dialog.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = () => {
    return (<div className={s.dialogs}>
        <div className={s.dialogs_item}>
            <Dialog name='Alina' id='1'/>
            <Dialog name='Yana' id='2'/>
            <Dialog name='Dasha' id='3'/>
        </div>
        <div className={s.messages}>
            <Message text='Dasha love Fedora'/>
            <Message text='I Love Alina❤️'/>
            <Message text='Yana not Love Vadim'/>

        </div>
    </div>)
}
export default Dialogs;