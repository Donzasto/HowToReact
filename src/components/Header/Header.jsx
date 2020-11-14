import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='data:image/jpeg;base64,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'/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>login</NavLink>}

            </div>
        </header>)
}

export default Header;