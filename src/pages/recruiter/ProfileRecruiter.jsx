
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BannerProfile from '../../components/BannerProfile';

import '../../styles/components/profile.scss';
import About from './pages/About';


const ProfileRecruiter = () => {

    return (
        <>
            <BannerProfile />
            <div className="container">
                <About />
            </div>
        </>
    )
}

export default ProfileRecruiter;
