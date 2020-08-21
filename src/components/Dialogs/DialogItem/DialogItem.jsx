import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <img src="data:image/png;base64,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"/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem