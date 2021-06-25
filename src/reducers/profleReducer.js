import { types } from "../types/types";


const initialState = {
    active: {}
}


export const profileReducer = ( state = initialState, action) => {

    switch(action.type){
        case types.profileUserGet:
            return {
                ...state,
                active: action.payload,
            }

        default:
            return state;
    }
    
}