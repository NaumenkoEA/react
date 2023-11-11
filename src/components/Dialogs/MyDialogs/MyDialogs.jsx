import s from "../Dialogs.module.css";
import React from "react";
import Dialog from "./Dialog/Dialog.jsx";

const MyDialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)
    return (
        <div className={s.dialogsItem}>
            {dialogElements}
        </div>
    )
}
export default MyDialogs