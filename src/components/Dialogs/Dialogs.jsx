import s from './Dialogs.module.css'
import React from "react";
import Dialog from "./Dialog/Dialog.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)

    let messageElements = props.state.messages.map(m => <Message id={m.id} text={m.text}/>)

    let createMes = React.createRef()

    let addMes = () =>{
        let text = createMes.current.value
        alert(text)
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogElements}
        </div>
        <div className={s.messages}>
            {messageElements}
            <div>
                <textarea ref={createMes}></textarea>
            </div>
            <div>
                <button onClick={addMes}> Add Message</button>
            </div>
        </div>
    </div>)
}
export default Dialogs;