import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { startUpdateUser } from '../actions/user';
import { useForm } from '../hooks/useForm';

import '../styles/components/userData.scss';

const UserData = () => {

    const dispatch = useDispatch();
    const { name, lastname, email, phone_number } = useSelector(state => state.auth);
    const { countries, country } = useSelector(state => state.countries);

    const [ updateProfileInfo, handleUpdateProfileInfo] = useForm({
        changeName: name,
        changeLastname: lastname,
        changePhone_number: phone_number,
        changeEmail: email,
        changeUbication: country.id,
    });

    const {changeName, changeLastname, changePhone_number, changeEmail, changeUbication} = updateProfileInfo;

    const handleSubmitUpdateUser = (e) => {
        e.preventDefault();
        const expression = /^[0-9]+$/;

        if (!changePhone_number.toString().match(expression)) {
            Swal.fire('Número de contacto', "El campo de ser solo número", 'info');
            return false;
        }

        if (changePhone_number.length < 10 || changePhone_number.length > 10) {
            Swal.fire('Número de contacto', "El número de contacto debe ser de 10 digitos", 'info');
            return false;
        }

        dispatch(startUpdateUser(changeName, changeLastname, changePhone_number, changeUbication));
    }

    
    return (
        <>
            <div className="col-12" >
                <div className="user__form--update">
                    <form className="user__form" onSubmit={handleSubmitUpdateUser}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="fullName" className="form-label">Nombre completo</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="changeName"
                                        placeholder="Nombre completo"
                                        value={changeName} 
                                        onChange={handleUpdateProfileInfo}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="fullName" className="form-label">Nombre completo</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="changeLastname" 
                                        placeholder="Nombre completo" 
                                        value={changeLastname} 
                                        onChange={handleUpdateProfileInfo} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="country" className="form-label">País</label>
                                    <select className="form-control" name="changeUbication" value={changeUbication} defaultValue={country.id} onChange={handleUpdateProfileInfo}>
                                        <option value={country.id}>{country.country}</option>
                                        {
                                            countries.map(item => (
                                                <option key={item.code} value={item.id}>{item.country}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="telephoneNumber" className="form-label">Número de contacto</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="changePhone_number" 
                                        placeholder="Número de contacto"
                                        maxLength="10"
                                        value={changePhone_number}
                                        onChange={handleUpdateProfileInfo} autoComplete="off" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Correo electronico</label>
                                    <input type="text" className="form-control" id="email" placeholder="Correo electronico" value={changeEmail} onChange={handleUpdateProfileInfo}  disabled/>
                                </div>
                            </div>
                        </div>
                        <div className="row user__btn-update">
                            <button type="submit">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserData;
