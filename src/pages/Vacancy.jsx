import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { format } from 'timeago.js';
import { startApplyVacancy, startGetVacancy } from '../actions/vacancy';

// import {vacancy} from '../data/vacancies.json'
import '../styles/components/vacancy.scss';

function Vacancy({history}) {
    const {id} = useParams();
    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.auth);
    const {active} = useSelector(state => state.vacancy);
    const {title, salary, company, description, technologies = [], createdAt} = active; //experience

    useEffect(() => {
        dispatch(startGetVacancy(id));
    }, [id,dispatch]);
    

    const handleVacancy = () => {
        if (!!uid) {
            Swal.fire({
                title: 'Aplicando a vatcante',
                text: "Al aplicar a esta vacante, enviaremos tus datos de contacto (como tu numero de feléfono y tu correo electronico) y tu HV",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, aplicar'
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(startApplyVacancy());
                }else {
                    console.log('Probando si se ejecuta');
                }
            })
        }else {
            Swal.fire({
                text: "Debes iniciar sesión para aplicar a la vacante",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iniciar sesión'
              }).then((result) => {
                if (result.isConfirmed) {
                    return history.push('/login');
                }
            })
        }
    }
    return (
        <main>
            <div className="container-fluid">
                <div className="row m-3">
                    <div className="col-6 card__detail__vacancy">
                        <div className="container__title_vacancy">
                            <h3>{title}</h3>
                            <div className="detail__vacancy__location">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>{}</p>
                            </div>
                            <span>{format(createdAt, 'es_ES')}</span>
                        </div>
                        <div className="detail__company__vacancy">
                            <span>{company}</span>
                            <div className="valuations__vacancy">
                                <span className="star__span star1"></span>
                                <span className="star__span star2"></span>
                                <span className="star__span star3"></span>
                                <span className="star__span star4"></span>
                                <span className="star__span star5"></span>
                            </div>
                        </div>
                        <div className="container__description_vacancy">
                            <div className="subtitle__vacancy">
                                <h5>Descripción general</h5>
                            </div>
                            <div className="description_vacancy">
                                {description}
                            </div>
                        </div>
                        <div className="container__technologies">
                            <div className="subtitle__technologies--vacancy">
                                <h5>Tecnologías requeridas</h5>
                                <ul>
                                    {
                                            technologies.map( tecno => (
                                                <li key={tecno.idTecno}>{tecno.tecnology}</li>
                                            ))
                                    }
                                </ul>
                            </div>
                            <div className="technologies_vacancy">
                            </div>
                        </div>
                        <div className="container__salary">
                            <h5>Rango salarial</h5>
                            <p><span>Salario: </span> {salary}</p>
                        </div>
                        <div className="container__btn">
                            <button onClick={handleVacancy}>Aplicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Vacancy;
