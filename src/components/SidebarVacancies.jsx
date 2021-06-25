import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import '../styles/components/SidebarVacancies.css';

const SidebarVacancies = ({publicationTime, setPublicationTime}) => {
    // moment
    const { contracts } = useSelector(state => state.contracts);
    const { workingdays } = useSelector(state => state.workingdays);

    const handlePublicationDate = () => {
        const dataSelect = document.getElementById('publicationDate').value;
        setPublicationTime(dataSelect);
    }

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    let date = hoy.toISOString();

    let today = moment(date).format('L');

    let threeDaysAgo = moment(date).add(-3, 'days').format('L');
    let aWeekAgo = moment(date).add(-1, 'week').format('L');
    let aMonthAgo = moment(date).add(-1, 'month').format('L');

    return (
        <div className="sidebar__vacancies">
            <div className="sidebar__vacancies--date-publication">
                <p className="h5">Fecha de publicación</p>
                <select className="form-select" defaultValue={publicationTime} id="publicationDate" name="publicationDate" onChange={handlePublicationDate}>
                    <option value="1">En cualquier momento</option>
                    <option value={today}>Hoy</option>
                    <option value={threeDaysAgo}>Hace tres días</option>
                    <option value={aWeekAgo}>Hace una semana</option>
                    <option value={aMonthAgo}>Hace un mes</option>
                </select>
            </div>
            <div className="sidebar__vacancies--categories">
                <p className="h5">Categoría de proyectos</p>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <input className="form-check-input" type="checkbox" value="" id="check1" />
                        <label className="form-check-label" htmlFor="check1">
                            Todas las categorías
                        </label>
                    </li>
                    <li className="nav-item">
                        <input className="form-check-input" type="checkbox" value="" id="check2" />
                        <label className="form-check-label" htmlFor="check2">
                            Programación y Tecnología
                        </label>
                    </li>
                    <li className="nav-item">
                        <input className="form-check-input" type="checkbox" value="" id="check3" />
                        <label className="form-check-label" htmlFor="check3">
                            Diseño y Multimedia
                        </label>
                    </li>
                    <li className="nav-item">
                        <input className="form-check-input" type="checkbox" value="" id="check4" />
                        <label className="form-check-label" htmlFor="check4">
                            Marketing Digital y Ventas
                        </label>
                    </li>
                    <li className="nav-item">
                        <input className="form-check-input" type="checkbox" value="" id="check5" />
                        <label className="form-check-label" htmlFor="check5">
                            Finanzas y Negocios
                        </label>
                    </li>
                </ul>
            </div>
            <div className="sidebar__vacancies--country">
                <p className="h5">Tipo de contrato</p>
                <select className="form-select">
                    <option >Selecciona un tipo de contrato</option>
                    {
                        contracts.map(contract => (
                            <option key={contract.id} value={contract.id}>{contract.contract}</option>
                        ))
                    }
                </select>
            </div>
            <div className="sidebar__vacancies--country">
                <p className="h5">Jornada laboral</p>
                <select className="form-select">
                    <option >Selecciona una jornada laboral</option>
                    {
                        workingdays.map(workingday => (
                            <option key={workingday.id} value={workingday.id}>{workingday.workingday}</option>
                        ))
                    }
                </select>
            </div>
            <div className="sidebar__vacancies--country">
                <p className="h5">País</p>
                <select className="form-select">
                    <option >Todos los paises</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="sidebar__vacancies--language">
                <p className="h5">Idioma</p>
                <select className="form-select">
                    <option value="1">Todos los idiomas</option>
                    <option value="2">Inglés</option>
                    <option value="3">Español</option>
                </select>
            </div>
        </div>
    )
}

export default SidebarVacancies;
