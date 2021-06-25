import { types } from "../types/types";

const initialState = {
    countries: [],
    country: {}
}

export const countriesReducer = ( state = initialState, action) => {

    switch(action.type){
        case types.countriesLoaded:
            return {
                ...state,
                countries: [...action.payload]
            }

        case types.countryActive:
            return {
                ...state,
                country: action.payload
            }

        default:
            return state;
    }

}