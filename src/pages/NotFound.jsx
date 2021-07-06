import React from 'react';

import pagenotfound from '../images/illustrations/404_Page_Not_Found_Two_Color.svg';
import '../styles/components/notFound.scss';


const NotFound = () => {
    return (
        <div className="page__notfound">
            <div className="page__notfound-container">
                <img src={pagenotfound} alt="Página no encontrada" />
                <h3>Página no encontrada</h3>
                <p>Ir al página de <a href="/">inicio</a></p>
            </div>
        </div>
    )
}

export default NotFound;
