import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import Input from '../../components/Input';
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
        setChangeFormAuth(2);
    }
    const handlechangeRecoverPassword = () => {
        setChangeFormAuth(3);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        dispatch(startLogin(lEmail, lPassword));
    }
    return (
        <main className={changeFormAuth === 1 ? "container" : "d-none"}>
            <div className="row">
                <div className="col-12">
                    <div className="card container-login" styles="width: 18rem;">
                        <div className="card-body">
                            <div className="form-title">
                                <h3>Iniciar sesión</h3>
                            </div>
                            <form className="form-login" onSubmit={handleSubmitForm}>
                                <Input 
                                    col=""
                                    label=""
                                    type="text"
                                    classname="input-email"
                                    name="lEmail"
                                    id="languages"
                                    value={lEmail}
                                    onChange={handleLoginInputChange}
                                    placeholder="Correo eléctronico"
                                />
                                <Input 
                                    col=""
                                    label=""
                                    type="password"
                                    classname="input-pass"
                                    name="lPassword"
                                    id="lPassword"
                                    value={lPassword}
                                    onChange={handleLoginInputChange}
                                    placeholder="Contraseña"
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
                                <span onClick={handlechangeRecoverPassword}>Olvidé mi contraseña</span>
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
