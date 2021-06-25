import { types } from "../types/types";

const initialState = {
    contracts: [],
    contract: {}
}
const initialStatswd = {
    workingdays: [],
    workingday: {}
}

export const contractsReducer = ( state = initialState, action) => {

    switch(action.type){
        case types.typesContractsLoaded:
            return {
                ...state,
                contracts: [...action.payload]
            }

        // case types.countryActive:
        //     return {
        //         ...state,
        //         country: action.payload
        //     }

        default:
            return state;
    }

}

export const workingdaysReducer = ( state = initialStatswd, action) => {

    switch(action.type){
        case types.workingDaysLoaded:
            return {
                ...state,
                workingdays: [...action.payload]
            }

        default:
            return state;
    }

}