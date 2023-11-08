import s from "../Dialogs.module.css";
import React from "react";

const Message =(props) =>{
    return (
        <div className={s.messagesInfo}>
            <div className={s.message}>{props.text}</div>
        </div>
        
    );
}
export default Message