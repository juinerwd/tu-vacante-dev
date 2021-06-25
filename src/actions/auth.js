import { fetchNoToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

import { finishLoading, startLoading } from './ui';


export const startLogin = (email, password) => {
    return async( dispatch ) => {

        dispatch( startLoading() );
        
        const resp = await fetchNoToken('auth', { email, password }, 'POST');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name,
                lastname: body.lastname,
                email: body.email,
                company: body.company,
                phone_number: body.phone_number,
                country: body.country,
                profilePhoto: body.profile_photo,
                role: body.role
            }))
            dispatch( finishLoading() );
        }else {
            Swal.fire('Error', 'No se pudo iniciar sesión, por favor revisa tu email y contraseña', 'error');
            dispatch( finishLoading() );
        }
    }
}
export const startRegister = (name, lastname, email, company, country, password, policy, role) => {
    return async (dispatch) => {
        const resp = await fetchNoToken('auth/register', { name, lastname, email, company, password, country, policy, role }, 'POST');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name,
                lastname: body.lastname,
                email: body.email,
                company: body.company,
                phone_number: body.phone_number,
                country: body.country,
                profilePhoto: body.profile_photo,
                role: body.role
            }))
        }else {
            Swal.fire('Error', body.message, 'error');
        }
    }
}

export const startCheking = () => {
    return async (dispatch) => {
        const resp = await fetchWithToken('auth/renew');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name,
                lastname: body.lastname,
                email: body.email,
                company: body.company,
                phone_number: body.phone_number,
                country: body.country,
                profilePhoto: body.profile_photo,
                role: body.role
            }))
        }else {
            dispatch(checkingFinished());
        }
    }
}

const checkingFinished = () => ({ type: types.authChekingFinish });

const login = (user) => ({
    type: types.login,
    payload: user
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({ type: types.logout });