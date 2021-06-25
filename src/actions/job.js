import { fetchNoToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startGetTypesContracts = () => {
    return async( dispatch ) => {
        try {

            const resp = await fetchNoToken('typescontracts');
            const body = await resp.json();

            dispatch(typesContractsLoaded(body.contracts));

        } catch (error) {
            console.log(error);
        }
    }
}

const typesContractsLoaded = (contracts) => ({
    type: types.typesContractsLoaded,
    payload: contracts
});

export const startGetWorkingDays = () => {
    return async( dispatch ) => {
        try {

            const resp = await fetchNoToken('workingdays');
            const body = await resp.json();

            dispatch(workingDays(body.workingdays));

        } catch (error) {
            console.log(error);
        }
    }
}

const workingDays = (workingdays) => ({
    type: types.workingDaysLoaded,
    payload: workingdays
});