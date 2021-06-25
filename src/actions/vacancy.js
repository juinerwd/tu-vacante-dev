import { fetchNoToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { prepareVacancies } from '../helpers/prepareVacancies';

// 

export const startCreateVacancy = ( vacancy ) => {
    return async ( dispatch, getState ) => {

        const { uid, name, lastname } = getState().auth;

        try {
        
            const resp = await fetchWithToken('vacancies', vacancy, 'POST');
            const body = await resp.json();

            if (body.ok) {
                vacancy.id = body.vacancy.id;
                vacancy.user = {
                    _id: uid,
                    name: name,
                    lastname: lastname
                }
                dispatch( VacancyAddNew(vacancy) );
                Swal.fire('Success', body.message, 'success');
            }else {
                Swal.fire('Error', body.msg, 'error');
            }
            
        } catch (error) {
            console.log(error);
        }

    }
}

const VacancyAddNew = (vacancy) => ({
    type: types.vacanciesAddNew,
    payload: vacancy
});

export const startApplyVacancy = () => {
    return async ( dispatch, getState ) => {
        const { name, lastname, email, phone_number } = getState().auth;
        const { active } = getState().vacancy;

        const dataCandidate = {
            candidate_name: `${name} ${lastname}`,
            candidate_telephoneNumber: `${phone_number}`,
            candidate_email: `${email}`,
            candidate_cv: "fvfmfbfmlñ",
            vacancy_name: active.title,
            vacancy_id: active.vid,
            recruiter_id: active.user
        }

        try {
            const resp = await fetchWithToken('vacancies/apply', dataCandidate, 'POST');
            const body = await resp.json();

            if (body.ok) {
                Swal.fire('Success', body.msg, 'success');
            }else {
                // console.log(body.errores.location.msg);
                Swal.fire('Error', body.msg, 'error');
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const startGetCandidates = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        try {
        
            const resp = await fetchWithToken(`vacancies/candidates/${uid}`);
            const body = await resp.json();

            // console.log(body.candidates);

            if (body.ok) {
                dispatch( getCandidateVacancy(body.candidates) );
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}

const getCandidateVacancy = (candidate) => ({
    type: types.candidateVacancy,
    payload: candidate
});

export const vacanciesStartLoading = () => {
    return async ( dispatch, getState ) => {
        try {

            const resp = await fetchNoToken('vacancies');
            const body = await resp.json();
            
            const vacancies = prepareVacancies(body.vacancies);
            // console.log(vacancies);
            dispatch(vacancyLoaded(vacancies));

        } catch (error) {
            console.log(error);
        }
    }
}

const vacancyLoaded = (vacancies) => ({
    type: types.vacanciesLoaded,
    payload: vacancies
});

export const startGetVacancy = ( id ) => {
    return async ( dispatch, getState ) => {
        try {
        
            const resp = await fetchNoToken(`vacancies/${id}`);
            const body = await resp.json();

            // console.log(body.vacancy);

            if (body.ok) {
                dispatch( getVacancy(body.vacancy) );
                // Swal.fire('Success', body.message, 'success');
            }else {
                // console.log(body.errores.location.msg);
                Swal.fire('Error', body.msg, 'error');
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}

const getVacancy = (vacancy) => ({
    type: types.vacanciesActive,
    payload: vacancy
});
