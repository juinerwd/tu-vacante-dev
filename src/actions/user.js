import { fetchWithToken, fetchNoToken, fetchWithTokenRecoverAccount } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';

export const startUpdatePersonalInfo = ( name, lastname, phone_number, country ) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const resp = await fetchWithToken(`profile/${uid}`, {name, lastname, phone_number, country}, 'PUT');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire('Info', body.msg, 'info');
        }else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startUpdateAboutMe = ( about_me, years_experience, portafolio_url ) => {
    return async (dispatch, getState) => {

        const profileid = getState().profile.active;

        if (about_me === '') {
            about_me = profileid === null ? '' : profileid.about_me;
        }
        if (years_experience === '') {
            years_experience = profileid === null ? '' : profileid.years_experience;
        }
        if (portafolio_url === '') {
            portafolio_url = profileid === null ? '' : profileid.portafolio_url;
        }

        const resp = await fetchWithToken(`profile`, {about_me, years_experience, portafolio_url}, 'PUT');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire('Info', body.msg, 'info');
        }else {
            Swal.fire('Ooohs', body.msg, 'error');
        }
    }
}
export const startUpdateStudies = ( studies, skills, featured_projects, certifications, tools_technologies, languages,  ) => {
    return async (dispatch, getState) => {

        // const user = getState().auth.uid;
        const profileid = getState().profile.active;


        if (studies === '') {
            studies = profileid === null ? '' : profileid.studies;
        }
        if (skills === '') {
            skills = profileid === null ? '' : profileid.skills;
        }
        if (featured_projects === '') {
            featured_projects = profileid === null ? '' : profileid.featured_projects;
        }
        if (certifications === '') {
            certifications = profileid === null ? '' : profileid.certifications;
        }
        if (tools_technologies === '') {
            tools_technologies = profileid === null ? '' : profileid.tools_technologies;
        }
        if (languages === '') {
            languages = profileid === null ? '' : profileid.languages;
        }

        const resp = await fetchWithToken(`profile`, { studies, skills, featured_projects, certifications, tools_technologies, languages }, 'PUT');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire('Info', body.msg, 'info');
        }else {
            Swal.fire('Ooohs', body.msg, 'error');
        }
    }
}

export const startUpdateUser = ( name, lastname, phone_number, country ) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const resp = await fetchWithToken(`users/${uid}`, {name, lastname, phone_number, country}, 'PUT');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire('Info', body.msg, 'info');
        }else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startChangePassword = (currentPassword, password) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const resp = await fetchWithToken(`users/password/${uid}`, {currentPassword, password}, 'PUT');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire('Info', body.msg, 'info');
        }else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        Swal.fire({
            title: 'Cargando...',
            text: 'Por favor espera un momento',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const profile_photo = await fileUpload(file);

        Swal.close();

        const resp = await fetchWithToken(`users/${uid}`, {profile_photo}, 'PUT');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire('Info', body.msg, 'info');
        }else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startSendEmailForgotPassword = (email) => {
    return async (dispatch, getState) => {
        const resp = await fetchNoToken(`send-email`, {email}, 'POST');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token-forgot-pass', body.token);
            localStorage.setItem('token-init-date-fp', new Date().getTime());

            Swal.fire('Info', body.msg, 'info');
        }else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startRecoverAccount = (password, action) => {
    return async (dispatch, getState) => {
        const resp = await fetchWithTokenRecoverAccount('send-email/recover-account', {password, action}, 'POST');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire('', body.msg, 'info');
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startGetProfileUser = ( ) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        try {
            const resp = await fetchWithToken(`profile/${uid}`);
            const body = await resp.json();
            
            if (body.ok) {
                dispatch( getProfileUser(body.profile) );
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const getProfileUser = (profile) => ({
    type: types.profileUserGet,
    payload: profile
});