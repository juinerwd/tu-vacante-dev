import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
// import { startGetVacancy } from '../actions/vacancy';

// import starsIcon from '../images/icons/star-regular.svg';
import '../styles/components/CardVacancy.css';


const CardVacancy = (props) => {
    // const dispatch = useDispatch()
    const vacancy = props.vacancy;


    return (
        <div className="card__vacancy">
            <div className="title__hour">
                <h5>{vacancy.title}</h5>
                <span>{format(vacancy.createdAt, 'es_ES')}</span>
            </div>
            <div className="company__vacancy">
                <span>{vacancy.v_company}</span>
                <div className="valuations__vacancy">
                    <span className="star__span star1"></span>
                    <span className="star__span star2"></span>
                    <span className="star__span star3"></span>
                    <span className="star__span star4"></span>
                    <span className="star__span star5"></span>
                </div>
            </div>
            <div className="description__vacancy">
                <p>{vacancy.description}</p>
            </div>
            <div className="others__data__vacancy">
                <div className="salary__location__vacancy">
                    <div className="salary">
                        <span>Salario:  {vacancy.salary}</span>
                    </div>
                    <div className="location__vacancy">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Buenaventura, Valle del Cauca</p>
                    </div>
                </div>
                <div className="btn-vacancy">
                    <Link className="btn__link" to={`/vacancy/${vacancy.vid}`}>Ver oferta</Link>
                </div>
            </div>
        </div>
    )
}

export default CardVacancy;
