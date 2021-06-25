import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import '../../styles/components/Login.css';

const Login = ({changeFormAuth, setChangeFormAuth}) => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );;
    
    const [ formLoginValues, handleLoginInputChange] = useForm({
        lEmail: '',
        lPassword: ''
    });


    const {lEmail, lPassword} = formLoginValues;

    const handlechangeFormAuth = () => {
        setChangeFormAuth(false);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        dispatch(startLogin(lEmail, lPassword));
    }
    return (
        <main className={changeFormAuth ? "container" : "container d-none"}>
            <div className="row">
                <div className="col-12">
                    <div className="card container-login" styles="width: 18rem;">
                        <div className="card-body">
                            <div className="form-title">
                                <h3>Iniciar sesión</h3>
                            </div>
                            <form className="form-login" onSubmit={handleSubmitForm}>
                                <input 
                                    type="text"
                                    className="input-email"
                                    placeholder="Correo eléctronico"
                                    name="lEmail"
                                    value={lEmail}
                                    onChange={handleLoginInputChange}
                                />
                                <input 
                                    type="password"
                                    className="input-pass"
                                    placeholder="Contraseña"
                                    name="lPassword"
                                    value={lPassword}
                                    onChange={handleLoginInputChange}
                                />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="1" id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Mantener sesión
                                    </label>
                                </div>
                                <button className="btn-submit" type="submit" disabled={loading} >Ingresar</button>
                                {/* onClick={handleLogin} */}
                            </form>
                            <div className="others-links">
                                <span>Olvidé mi contraseña</span>
                                <span onClick={handlechangeFormAuth}>Crear una cuenta</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
// {`input-email ${ !loginEmailInvalid && 'is-invalid'}`}
// {`input-pass ${!loginPassInvalid && 'is-invalid'}`}
export default Login;
