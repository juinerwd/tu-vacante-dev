import { types } from "../types/types";

const initialState = {
    vacancies: [],
    active: {}
}

export const vacanciesReducer = ( state = initialState, action) => {

    switch(action.type){
        case types.vacanciesLoaded:
            return {
                ...state,
                vacancies: [...action.payload]
            }

        case types.vacanciesActive:
            return {
                ...state,
                active: action.payload
            }

        default:
            return state;
    }

}