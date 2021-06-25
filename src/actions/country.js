import { fetchNoToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startGetCountries = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchNoToken('country');
            const body = await resp.json();

            dispatch(countriesLoaded(body.countries));

        } catch (error) {
            console.log(error);
        }
    }
}

const countriesLoaded = (countries) => ({
    type: types.countriesLoaded,
    payload: countries
});

export const startGetCountry = () => {
    return async( dispatch, getState ) => {

        const { country } = getState().auth;

        try {

            const resp = await fetchNoToken(`country/${country}`);
            const body = await resp.json();

            dispatch(countryLoaded(body.country));

        } catch (error) {
            console.log(error);
        }
    }
}

const countryLoaded = (country) => ({
    type: types.countryActive,
    payload: country
});