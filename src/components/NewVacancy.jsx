import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/components/newVacancy.scss';

const NewVacancy = ({vacancy}) => {
    const { countries } = useSelector(state => state.countries);

    return (
        <div className="col-6 col-lg-4">
            <div className="card card__new--vacancy">
                <div className="row1">
                    <span className="new">Nuevo</span>
                    <span className="hour">hace 1 hora</span>
                </div>
                <div className="row2">
                    <p>{vacancy.title}</p>
                </div>
                <div className="row3">
                    <p>{vacancy.description}</p>
                </div>
                <div className="row4">
                    <p className="location">Ubicación: {
                            countries.map(country => (
                                country.id === vacancy.location && (
                                    <span key={country.id}>{country.country}</span>
                                )
                            ))
                        }
                    </p>
                    <Link className="see__vacancy" to={`/vacancy/${vacancy.vid}`}>Ver vatante</Link>
                </div>
            </div>
        </div>
    )
}

export default NewVacancy;
