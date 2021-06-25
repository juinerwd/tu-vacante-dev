import { fetchNoToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startGetCurrencies = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchNoToken('currencies');
            const body = await resp.json();

            dispatch(currencyLoaded(body.currencies));

        } catch (error) {
            console.log(error);
        }
    }
}

const currencyLoaded = (currencies) => ({
    type: types.currenciesLoaded,
    payload: currencies
});