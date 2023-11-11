import Message from "./Message/Message.jsx";
import React from "react";
import s from "../Dialogs.module.css";

const MyMessages = (props) => {

    let messageElements = props.messages.map(m => <Message id={m.id} text={m.text}/>)

    let createMes = React.createRef()

    let addMes = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    let onMessageChange = () => {
        let text = createMes.current.value
        props.dispatch({type: 'UNMT', newText: text})
    }
    return (
        <div className={s.messagesBlock}>
            {messageElements}
            <div>
                <textarea onChange={onMessageChange} ref={createMes} value={props.newMessage}></textarea>
            </div>
            <div>
                <button onClick={addMes}> Add Message</button>
            </div>
        </div>

    )

}

export default MyMessages