import React from 'react';

import imgJobs from '../images/illustrations/undraw_laravel_and_vue.svg';
import iconSearch from '../images/icons/search-solid.svg';
import '../styles/components/banner.scss'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1>Busca y aplica a las mejores ofertas que <span className="name-web">VacanteDev</span> tiene para tí</h1>
                <div className="banner__form">
                    <form action="" method="post">
                        <input className="form-control" type="text" name="" id="" placeholder="Buscar" />
                        {/* <input type="text" name="" id="" placeholder="Ciudad" /> */}
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Recipient's username" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><img src={iconSearch} alt="" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Banner
