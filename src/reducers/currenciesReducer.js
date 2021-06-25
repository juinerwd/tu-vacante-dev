import { types } from "../types/types";

const initialState = {
    currencies: []
}

export const currenciesReducer = ( state = initialState, action) => {

    switch(action.type){
        case types.currenciesLoaded:
            return {
                ...state,
                currencies: [...action.payload]
            }

        default:
            return state;
    }

}