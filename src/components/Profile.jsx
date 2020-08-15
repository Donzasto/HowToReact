import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            </div>
            <div>
                <img src='https://www.meme-arsenal.com/memes/4755e2d723dc73f9757832eff0992707.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className ={s.posts}>
                    <div className ={s.item}>
                        post 1
                    </div>
                    <div className ={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>)
}

export default Profile;