import React from 'react';
import { useSelector } from 'react-redux';

import coverage from '../images/coverpage.png';
// import photoProfile from '../images/photoprofile.jpg';
import '../styles/components/BannerProfile.css';

const BannerProfile = () => {
    const { name, lastname, profilePhoto, role } = useSelector(state => state.auth);
    // const urlPhoro = 'https://res.cloudinary.com/dqpdnjjs5/image/upload/v1622231463/li6qw9rabr6ez4g8fbxs.jpg'
    return (
        <div>
            <div className="banner__coverpage">
                <img src={coverage} alt="" />
            </div>
            <div className="banner__photo--profile">
                <div className="banner__photo">
                    <img src={profilePhoto} alt="" />
                </div>
                <div className="banner__name">
                    <p>{`${name} ${lastname}`}</p>
                    <span className={role === 'DEV_ROLE' ? '' : 'd-none'}>Desarrollador Web</span>
                    <span className={role === 'RECRUITER_ROLE' ? '' : 'd-none'}>Reclutador</span>
                </div>
            </div>
        </div>
    )
}

export default BannerProfile;
