import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { candidateReducer } from './canditateReducer';
import { countriesReducer } from './countriesReducer';
import { currenciesReducer } from './currenciesReducer';
import { contractsReducer, workingdaysReducer } from './jobReducer';
import { profileReducer } from './profleReducer';
import { uiReducer } from './uiReducer';
import { vacanciesReducer } from './vacanciesReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    ui: uiReducer,
    vacancy: vacanciesReducer,
    candidates: candidateReducer,
    countries: countriesReducer,
    currencies: currenciesReducer,
    contracts: contractsReducer,
    workingdays: workingdaysReducer
})