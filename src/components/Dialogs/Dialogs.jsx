import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Sveta" id="1"></DialogItem>
                <DialogItem name="Andrey" id="2"></DialogItem>
                <DialogItem name="Vasiliy" id="3"></DialogItem>
            </div>
            <div className={s.messages}>
                <Message message="Hi">Hi</Message>
                <Message message="How is your">Hi</Message>
                <Message message="Yo">Hi</Message>
            </div>
        </div>
    )
}

export default Dialogs