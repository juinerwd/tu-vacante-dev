import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';

export const startGetProfileUser = ( ) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        try {
            const resp = await fetchWithToken(`profile/${uid}`);
            const body = await resp.json();

            // console.log(body.profile);
            
            if (body.ok) {
                dispatch( getProfileUser(body.profile) );
            }
        } catch (error) {
            console.log(error);
            // Swal.fire('Error', error, 'error');
        }
    }
}

const getProfileUser = (profile) => ({
    type: types.profileUserGet,
    payload: profile
});

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

        const user = getState().auth.uid;
        const profileid = getState().profile.active;

        if (about_me === '') {
            about_me = profileid.about_me;
        }
        if (years_experience === '') {
            years_experience = profileid.years_experience;
        }
        if (portafolio_url === '') {
            portafolio_url = profileid.portafolio_url;
        }

        let getIdProfile = JSON.stringify(profileid) === '{}' ? user : profileid.profile_id;

        const resp = await fetchWithToken(`profile/${getIdProfile}`, {user, about_me, years_experience, portafolio_url}, 'PUT');
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

        const user = getState().auth.uid;
        const profileid = getState().profile.active;

        if (studies === '') {
            studies = profileid.studies;
        }
        if (skills === '') {
            skills = profileid.skills;
        }
        if (featured_projects === '') {
            featured_projects = profileid.featured_projects;
        }
        if (certifications === '') {
            certifications = profileid.certifications;
        }
        if (tools_technologies === '') {
            tools_technologies = profileid.tools_technologies;
        }
        if (languages === '') {
            languages = profileid.languages;
        }
        

        let getIdProfile = JSON.stringify(profileid) === '{}' ? user : profileid.profile_id;

        const resp = await fetchWithToken(`profile/${getIdProfile}`, {user, studies, skills, featured_projects, certifications, tools_technologies, languages }, 'PUT');
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