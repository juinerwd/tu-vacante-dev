

export const types = {
    login: '[auth] login',
    logout: '[auth] logout',


    // authCheking: '[auth] Cheking login state',
    authChekingFinish: '[auth] Finish cheking login state',
    authStartLogin: '[auth] Start login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renew',
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    profileUserGet: '[Profile] Get profile user',

    vacanciesAddNew: '[Vacancies] New vacancies',
    vacanciesActive: '[Vacancies] Set active vacancies',
    vacanciesLoaded: '[Vacancies] Loaded vacancies',
    vacanciesUpdated: '[Vacancies] Update vacancies',
    vacanciesDelete: '[Vacancies] Delete vacancies',
    vacanciesGet: '[Vacancies] Get vacancies',
    vacanciesFileUrl: '[Vacancies] Update image url',
    candidateVacancy: '[Candidate] Get candidate vacancy',

    countriesLoaded: '[Countries] Load countries',
    countryActive: '[Countries] Load country',

    currenciesLoaded: '[Currencies] Load currencies',

    applyVacanciesAddNew: '[Apply] apply vacancies',

    typesContractsLoaded: '[Contracts] types of contracts',

    workingDaysLoaded: '[WorkingDay] working day',
}