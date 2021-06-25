import React from 'react';

const Certifications = ({activeSection}) => {
    return (
        <div className={(activeSection === 2) ? 'container' : 'd-none'}>
            <div className="certifications">
                <h3>Certificaciones</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="certifications">
                <h3>Descarga CV</h3>
            </div>
        </div>
    )
}

export default Certifications;
