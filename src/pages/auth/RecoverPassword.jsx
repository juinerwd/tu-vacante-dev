import React from 'react';
import { useDispatch } from 'react-redux';
import { startSendEmailForgotPassword } from '../../actions/user';
import { useForm } from '../../hooks/useForm';

import '../../styles/components/recoverPassword.scss';

const RecoverPassword = ({changeFormAuth, setChangeFormAuth}) => {
    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange] = useForm({
        lEmail: ''
    });

    const {lEmail} = formLoginValues;

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        dispatch(startSendEmailForgotPassword(lEmail));
    }
    return (
        <main className={changeFormAuth === 3 ? "container main-container" : "d-none"}>
             <div className="row">
                <div className="col-12">
                    <div className="card recover-password">
                        <div className="card-body">
                            <div className="form-title">
                                <h3>Recuperar contraseña</h3>
                            </div>
                            <form className="form-recover-password" onSubmit={handleSubmitForm}>
                                <input 
                                    type="text"
                                    className="input-email"
                                    placeholder="Correo eléctronico"
                                    name="lEmail"
                                    value={lEmail}
                                    onChange={handleLoginInputChange}
                                />
                                <button className="btn-submit" type="submit" >Recuperar</button>
                            </form>
                            <div className="others-links">
                                {/* <span onClick={handlechangeRecoverPassword}>Olvidé mi contraseña</span>
                                <span onClick={handlechangeFormAuth}>Crear una cuenta</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RecoverPassword;
