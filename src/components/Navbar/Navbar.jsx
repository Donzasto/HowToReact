import React from 'react';
import s  from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    
    let friends = props.state.friends.map(f=>(<div>{f.name}</div>))

    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}>
                <NavLink to="/profile" activeClassName={s.activeLnk}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLnk}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLnk}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLnk}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLnk}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.activeLnk}>Friends</NavLink>
                {friends}               
            </div>
        </nav>)
}

export default Navbar;