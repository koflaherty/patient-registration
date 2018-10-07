import {ENTERED_REGISTRATION, SUBMIT_REGISTRATION} from "../actions/actions";

export function enteredRegistration (state = {}, action) {
    switch (action.type) {
        case ENTERED_REGISTRATION:
            return {
                ...state,
                ...action.data
            };
        case SUBMIT_REGISTRATION:
            return { }; // clear registration data
        default:
            return state
    }
}