import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { startCreateVacancy } from '../../actions/vacancy';
import { useForm } from '../../hooks/useForm';

import '../../styles/components/createVacancy.scss';

const CreateVacancy = ({history}) => {
    const dispatch = useDispatch();
    const { uid, company } = useSelector(state => state.auth);
    const { countries } = useSelector(state => state.countries);
    const { currencies } = useSelector(state => state.currencies);
    const { contracts } = useSelector(state => state.contracts);
    const { workingdays } = useSelector(state => state.workingdays);

    const [showTechnologies, setShowTechnologies] = useState([]);

    const [ formCreateVacancy, handleVacancyInputChange] = useForm({
        title: '',
        description: '',
        v_company: company,
        experience: 0,
        salary: '',
        location: '',
        typeCurrency: '',
        technologies: [],
        startDate: '',
        finishDate: '',
        user: uid
    });

    const { title, description, v_company, experience, salary, location, typeCurrency, startDate, finishDate } = formCreateVacancy;

    // Añadiendo las technologias
    const handleTecnology = () => {
        // const technologiesv = [];
        let values = document.querySelector("#tecnology").value.toUpperCase();
        let searchExisting = showTechnologies.find(tech => tech.idTecno === values);

        if (values === "") {
            Swal.fire(
                'Campo vacido',
                'Debes poner un tecnologia',
                'info'
            )
            return false;
        }

        if (searchExisting) {
            Swal.fire(
                'Ya existe',
                `${values} ya existe`,
                'info'
            )
            return false;
        }
        setShowTechnologies([...showTechnologies, { idTecno: values, tecnology: values }]);
        formCreateVacancy.technologies.push({ 
            idTecno: values,
            tecnology: values
        });
        console.log(formCreateVacancy.technologies);
        document.querySelector("#tecnology").value = "";
    }

    // Eliminar tecnologías añadidas a la lista
    const handleDeleteTecnology = (id) => {
        // Obtenermos el elemento a eliminar a travez de su id
        const elements = document.getElementById(id);

        // Primero recorremos el arreglo que contiene las tecnologias añadidas
        showTechnologies.forEach(function(tech, index, object) {
            // Comparamos si el identificador enviado es igual a algunos que este en el arreglo
            if(tech.idTecno === id ){
                // Si la condición se cumple eliminaremos el objecto
                object.splice(index, 1);
            }
        });

        console.log(showTechnologies);
        // Cambiamos de el estado que contiene las tecnologias
        setShowTechnologies(showTechnologies);

        if (!elements){
            alert("El elemento selecionado no existe");
        } else {
            const padre = elements.parentNode;
            padre.removeChild(elements);
        }
    }

    const handleCreateVacancy = (e) => {
        e.preventDefault();
        
        dispatch(startCreateVacancy(formCreateVacancy));
    }

    return (
        <div className="container create__vacancy">
            <div className="create__vacancy--container">
                <h3>Publicar vacante</h3>
                <div className="create__vacancy--container-form">
                    <form onSubmit={handleCreateVacancy}>
                        <div className="row create__vacancy--container-row">
                            <div className="col-12 create__vacancy--container-col">
                                <input className="form-control" type="text" name="title" value={title} onChange={handleVacancyInputChange} placeholder="Título de la vacante" required />
                            </div>
                            <div className="col-12 create__vacancy--container-col">
                                <textarea className="form-control" name="description" value={description} onChange={handleVacancyInputChange} cols="30" placeholder="Descripción de la vacante" required></textarea>
                            </div>
                            <div className="col-6 create__vacancy--container-col">
                                <input className="form-control" type="text" name="v_company" value={v_company} onChange={handleVacancyInputChange} placeholder="Compañia" required />
                            </div>
                            <div className="col-6 create__vacancy--container-col">
                                <input className="form-control" type="text" name="experience" value={experience} onChange={handleVacancyInputChange} placeholder="Años de experiencia" required />
                            </div>
                            <div className="col-12 create__vacancy--container-col">
                                <input className="form-control" type="text" name="salary" value={salary} onChange={handleVacancyInputChange} placeholder="Rango salarial de la oferta" required />
                            </div>
                            <div className="col-6 md-6">
                                <select className="form-control" name="location" value={location} onChange={handleVacancyInputChange} required>
                                    <option value="null">Selecciona tu país</option>
                                    {
                                        countries.map(item => (
                                            <option key={item.code} value={item.id}>{item.country}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-6 md-6">
                                <select className="form-control" name="typeCurrency" value={typeCurrency} onChange={handleVacancyInputChange} required>
                                    <option value="null">Selecciona el tipo de moneda</option>
                                    {
                                        currencies.map(item => (
                                            <option key={item.id} value={item.id}>{item.currency}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-12 create__vacancy--tecnologies">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="tecnology" placeholder="Agregar tecnologias requeridas" required />
                                    <button className="btn btn-outline-secondary" type="button" onClick={handleTecnology} >Agregar</button>
                                </div>
                                <ul className="show-tech">
                                    {
                                        showTechnologies.map(tech => (
                                            <li key={tech.idTecno} id={tech.idTecno}>{tech.tecnology} 
                                                <span className="remove" onClick={() => handleDeleteTecnology(tech.idTecno)}><i className="fas fa-times"></i></span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-6 md-6">
                                <select className="form-control" name="typeCurrency" value={typeCurrency} onChange={handleVacancyInputChange} required>
                                    <option value="null">Tipo de contrato</option>
                                    {
                                        contracts.map(item => (
                                            <option key={item.id} value={item.id}>{item.contract}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-6 md-6">
                                <select className="form-control" name="typeCurrency" value={typeCurrency} onChange={handleVacancyInputChange} required>
                                    <option value="null">Tipo de jornada laboral</option>
                                    {
                                        workingdays.map(item => (
                                            <option key={item.id} value={item.id}>{item.workingday}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-6 create__vacancy--container-col">
                                <label htmlFor="deadline">Fecha de inicio</label>
                                <input className="form-control" type="date" name="startDate" value={startDate} onChange={handleVacancyInputChange} required />
                            </div>
                            <div className="col-6 create__vacancy--container-col">
                                <label htmlFor="deadline">Fecha de cierre</label>
                                <input className="form-control" type="date" name="finishDate" value={finishDate} onChange={handleVacancyInputChange} required />
                            </div>
                            <div className="col-12">
                                <button type="submit">Crear vacante</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateVacancy;
