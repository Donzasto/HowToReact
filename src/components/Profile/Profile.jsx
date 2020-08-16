import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            </div>
            <div>
                <img src='https://www.meme-arsenal.com/memes/4755e2d723dc73f9757832eff0992707.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>)
}

export default Profile;