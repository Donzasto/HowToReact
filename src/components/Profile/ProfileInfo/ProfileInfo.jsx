import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            </div>
            <div>
                <img src='https://www.meme-arsenal.com/memes/4755e2d723dc73f9757832eff0992707.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>

        </div>)
}

export default ProfileInfo;