
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BannerProfile from '../../components/BannerProfile';

import '../../styles/components/profile.scss';
import About from './pages/About';
import Certifications from './pages/Certifications';
import StudiesSkills from './pages/StudiesSkills';


const ProfileDev = () => {
    const [activeSection, setActiveSection] = useState(1);

    const handleSections = ({target}) => {
        // console.log(target.value);
        if (target.value === 'about') {
            setActiveSection(1);
        }
        if (target.value === 'certifica') {
            setActiveSection(2);
        }
        if (target.value === 'studieskills') {
            setActiveSection(3);
        }
    }

    return (
        <>
            <BannerProfile />
            <div className="container">
                <div className="profile__nav">
                    <ul>
                        <li className={activeSection === 1 ? 'activo' : ''}><button value="about" onClick={handleSections}>Sobre mi</button></li>
                        <li className={activeSection === 2 ? 'activo' : ''}><button value="certifica" onClick={handleSections}>Estudios y Habilidaddes</button></li>
                        <li className={activeSection === 3 ? 'activo' : ''}><button value="studieskills" onClick={handleSections}>Certificaciones y CV</button></li>
                    </ul>
                </div>
                <About activeSection={activeSection} />
                <Certifications activeSection={activeSection} />
                <StudiesSkills activeSection={activeSection} />
            </div>
        </>  
    )
}

export default ProfileDev;
