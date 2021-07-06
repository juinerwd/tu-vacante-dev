import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startRecoverAccount } from '../../actions/user';
import { useForm } from '../../hooks/useForm';

import '../../styles/components/recoverAccount.scss';

const RecoverAccount = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange] = useForm({
        raPassword1: '',
        raPassword2: ''
    });

    const {raPassword1, raPassword2} = formLoginValues;

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (raPassword1.length < '8' || raPassword2.length < 8) {
            Swal.fire('', 'Las contraseñas deben contener más de 8 caracteres', 'info');
            return false;
        }
        if (raPassword1 !== raPassword2) {
            Swal.fire('', 'Las contraseñas deben ser iguales', 'info');
            return false;
        }
        
        dispatch(startRecoverAccount(raPassword1));
    }
    return (
        <main className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card recover-account" styles="width: 18rem;">
                        <div className="card-body">
                            <div className="form-title">
                                <h3>Recuperar cuenta</h3>
                            </div>
                            <form className="form-recover-account" onSubmit={handleSubmitForm}>
                                <input 
                                    type="password"
                                    className="input-pass"
                                    placeholder="Nueva contraseña"
                                    name="raPassword1"
                                    value={raPassword1}
                                    onChange={handleLoginInputChange}
                                />
                                <input 
                                    type="password"
                                    className="input-pass-verify"
                                    placeholder="Repetir contraseña"
                                    name="raPassword2"
                                    value={raPassword2}
                                    onChange={handleLoginInputChange}
                                />
                                <button className="btn-submit" type="submit">Recuperar</button>
                                {/* onClick={handleLogin} */}
                            </form>
                            {/* <div className="others-links">
                                <span onClick={handlechangeRecoverPassword}>Olvidé mi contraseña</span>
                                <span onClick={handlechangeFormAuth}>Crear una cuenta</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RecoverAccount;
