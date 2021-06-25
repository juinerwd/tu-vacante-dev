import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

// import { startGetCandidates } from '../../../actions/vacancy';

const Myvacancies = () => {

    const {uid} = useSelector(state => state.auth);
    const { vacancies } = useSelector(state => state.vacancy);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5 mb-3">
                    <h1>Vacantes creadas</h1>
                </div>
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Titulo</th>
                                <th scope="col">Fecha de inicio</th>
                                <th scope="col">Fecha de finalización</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Detalle</th>
                                <th scope="col">Ver candidatos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vacancies.map(vacancy => (
                                    (vacancy.user._id === uid) && (
                                        <tr key={vacancy.vid}>
                                            <td>{vacancy.title}</td>
                                            <td>{moment(vacancy.startDate).format('LL')}</td>
                                            <td>{moment(vacancy.finishDate).format('LL')}</td>
                                            <td><span className={vacancy.state === true ? 'text-success':'text-danger'}>{vacancy.state === true ? 'Activo' : 'Inactivo'}</span></td>
                                            <td><Link className="dropdown-item" to="/">Detalles</Link></td>
                                            <td><Link className="dropdown-item" to={`/vacancy-candidates/${vacancy.vid}`}>Ver</Link></td>
                                        </tr>
                                    )
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myvacancies
