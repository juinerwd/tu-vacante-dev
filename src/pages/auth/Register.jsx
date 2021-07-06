import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { startRegister } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

import '../../styles/components/register.scss';

const Register = ({changeFormAuth, setChangeFormAuth}) => {
    const dispatch = useDispatch();
    const {countries} = useSelector( state => state.countries );

    const [activeInput, setActiveInput] = useState(true);
    const [ formRegisterValues, handleRegisterInputChange] = useForm({
        rName: '',
        rLastName: '',
        rEmail: '',
        rCompany: '',
        rUbication: '',
        lPassword: '',
        rPolicy: true,
    });

    const { rName, rLastName, rEmail, rCompany, rUbication, lPassword, rPolicy } = formRegisterValues;

    const handleChangeForm = ({target}) => {
        if (!activeInput) {
            setActiveInput(true);
        }else {
            setActiveInput(false);
        }
    }

    const handlechangeFormAuth = () => {
        setChangeFormAuth(1);
    }

    const handleSubmitFormRegister = (e) => {
        e.preventDefault();
        const userRole = 'DEV_ROLE';
        const recruiterRole = 'RECRUITER_ROLE';

        if(!activeInput){
            if (isFormValid()) {
                dispatch(startRegister(rName, rLastName, rEmail, rCompany, rUbication, lPassword, rPolicy, recruiterRole));
            }
        }else {
            if (isFormValid()) {
                dispatch(startRegister(rName, rLastName, rEmail, rCompany, rUbication, lPassword, rPolicy, userRole));
            }
        }
    }

    const isFormValid = () => {

        if (rName.trim().length === 0) {
            dispatch( setError('EL nombre es requerido') );
            return false;
        }else if (!validator.isEmail(rEmail)) {
            dispatch( setError('El correo electronico no es valido') );
            return false;
        }else if (lPassword.length < 8){
            dispatch( setError('La contraseña debe contener más de 8 caracteres') );
            return false;
        }else if (rUbication === '' || rUbication === 'null'){
            dispatch( setError('Debe selecionar tu ubicación') );
            return false;
        }

        dispatch( removeError() );
        return true;
    }

    return (
        <main className={changeFormAuth === 2 ? "container" : "d-none"}>
            <div className="row">
                <div className="col-12">
                    <div className="card container-register">
                        <div className="card-body">
                            <div className="form-title">
                                <h3>Registro</h3>
                                <div className="form-check">
                                    <input 
                                        type="checkbox"
                                        className="form-check-input"
                                        id="checkChecked"
                                        name="activeRecruiter"
                                        value={activeInput}
                                        onClick={handleChangeForm}
                                    />
                                    <label className="form-check-label" htmlFor="checkChecked">
                                        Como reclutador
                                    </label>
                                </div>
                            </div>
                            <form className="form-register" onSubmit={handleSubmitFormRegister}>
                                <div className="row">
                                    <div className="col-6">
                                        <input 
                                            type="text" 
                                            className="input input-fullName" 
                                            name="rName"
                                            placeholder="Nombre" 
                                            value={rName} 
                                            onChange={handleRegisterInputChange}
                                            
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input 
                                            type="text" 
                                            className="input input-fullName" 
                                            name="rLastName"
                                            placeholder="Apellido" 
                                            value={rLastName} 
                                            onChange={handleRegisterInputChange}
                                            
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input 
                                            type="email" 
                                            className="input input-email" 
                                            name="rEmail"
                                            placeholder="Correo electronico" 
                                            value={rEmail} 
                                            onChange={handleRegisterInputChange}
                                            
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input 
                                            type="text" 
                                            className={activeInput ? 'input input-company hidden' : 'input input-company'} 
                                            name="rCompany"
                                            value={rCompany} 
                                            onChange={handleRegisterInputChange}
                                            placeholder="Empresa"
                                        />
                                    </div>
                                    <div className="col-12 md-6">
                                        <select className="" name="rUbication" onChange={handleRegisterInputChange}>
                                            <option value="null">Selecciona tu país</option>
                                            {
                                                countries.map(item => (
                                                    <option key={item.code} value={item.id}>{item.country}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12 md-6">
                                        <input 
                                            type="password" 
                                            className="input input-pass" 
                                            name="lPassword"
                                            placeholder="Contraseña" 
                                            value={lPassword} 
                                            onChange={handleRegisterInputChange}
                                            
                                        />
                                    </div>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        name="rPolicy"
                                        id="checkTerm"
                                        value={rPolicy} 
                                        onChange={handleRegisterInputChange}
                                        required 
                                    />
                                    <label className="form-check-label" htmlFor="checkTerm">
                                        Acepto los Términos y condiciones de servicio y la política de privacidad de TUVACANTEDEV
                                    </label>
                                </div>
                                <button className="btn-submit" type="submit">Crear cuenta</button>
                            </form>
                            <div className="others-links">
                                <span onClick={handlechangeFormAuth}>Iniciar sesión</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register;
