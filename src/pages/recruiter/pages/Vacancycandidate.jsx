import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import moment from 'moment';

import { startGetCandidates } from '../../../actions/vacancy';

const Vacancycandidate = () => {

    const {id} = useParams();

    const dispatch = useDispatch();
    const {uid} = useSelector(state => state.auth);
    const {candidates} = useSelector(state => state.candidates);
    const { vacancies } = useSelector(state => state.vacancy);

    useEffect(() => {
        dispatch(startGetCandidates());
    }, [dispatch])
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <h1>Candidatos</h1>
                </div>
                <div className="col-12 mt-5">
                    <h4>Vacante: {vacancies.map(vacancy => (
                        (vacancy.vid === id) && (
                            <span key={vacancy.vid}>{vacancy.title}</span>
                        )
                    ))}</h4>
                </div>
                <div className="col-12 mt-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Fecha de postulación</th>
                                <th scope="col">Nombre candidatos</th>
                                <th scope="col">Número de teléfono</th>
                                <th scope="col">Correo electronico</th>
                                <th scope="col">CV</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                candidates.map(candidate => (
                                    (candidate.recruiter_id === uid && candidate.vacancy_id === id) && (
                                        <tr key={candidate.cv_id}>
                                            <td>{moment(candidate.createdAt).format('LLL')}</td>
                                            <td>{candidate.candidate_name}</td>
                                            <td>{candidate.candidate_telephoneNumber}</td>
                                            <td>{candidate.candidate_email}</td>
                                            <td>Curriculum</td>
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

export default Vacancycandidate
