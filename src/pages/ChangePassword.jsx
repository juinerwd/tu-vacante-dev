import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import '../styles/components/userData.scss';

import { useForm } from '../hooks/useForm';
import { startChangePassword } from '../actions/user';

const ChangePassword = () => {

    const dispatch = useDispatch();

    const [ changePassword, handleChangePassword] = useForm({
        currentPassword: '',
        newPassword: '',
        repeatPassword: ''
    });

    const { currentPassword, newPassword, repeatPassword } = changePassword;

    const handleSubmitChangePassword = (e) => {
        e.preventDefault();
        const password1 = document.getElementById('currentPassword').value;
        const password2 = document.getElementById('newPassword').value;
        const password3 = document.getElementById('repeatPassword').value;

        if (password1 === password2) {
            Swal.fire('', "La contraseña actual no puede ser igual a la nueva contraseña", 'info');
            return false;
        }
        if (password1.length < 8 && password2.length < 8 && password3.length < 8) {
            Swal.fire('', "Las contraseñas deben tener 8 o más caracteres", 'info');
            return false;
        }
        if (password2 !== password3) {
            Swal.fire('', "El campo nueva contraseña y repetir contraseña deben de ser iguales", 'info');
            return false;
        }

        dispatch(startChangePassword(currentPassword, newPassword));

        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('repeatPassword').value = '';
    }

    return (
        <div className="col-12">
            <div className="user__form--update">
                <form className="user__form" onSubmit={handleSubmitChangePassword}>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="country" className="form-label">Contraseña actual</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="currentPassword" 
                                    id="currentPassword"
                                    value={currentPassword}
                                    onChange={handleChangePassword}
                                    placeholder="Contraseña actual" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="country" className="form-label">Nueva contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="newPassword" 
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={handleChangePassword}
                                    placeholder="Nueva contraseña" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="country" className="form-label">Repetir contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="repeatPassword" 
                                    id="repeatPassword"
                                    value={repeatPassword}
                                    onChange={handleChangePassword}
                                    placeholder="Repetir contraseña" />
                            </div>
                        </div>
                    </div>
                    <div className="row user__btn-update">
                        <button type="submit">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
