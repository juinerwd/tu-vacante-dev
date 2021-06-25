import React from 'react';
import { useSelector } from 'react-redux';

import '../../../styles/components/about.scss';

const About = ({activeSection}) => {

    const {active} = useSelector(state => state.profile);

    return (
        <div className={(activeSection === 1) ? 'container' : 'd-none'}>
            <div className="about__about--me">
                <h3>Acerca de mi</h3>
                <p>{active.about_me}</p>
            </div>
            <div className="about__language">
                <h3>Idiomas</h3>
                <ul>
                    <li>Español</li>
                    <li>Inglés</li>
                </ul>
            </div>
            <div className="about__briefcase">
                <h3>Portafolio</h3>
                <ul>
                    <li><a href={active.portafolio_url} target="__blank">Mi portafolio</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About;
