import s from "../../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Dialog =(props) =>{

    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZEpKMCUPwz_zmTY65JB4DmzUFCHn6QTmIw&usqp=CAU" alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog