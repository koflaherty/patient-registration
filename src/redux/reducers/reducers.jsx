import {ENTERED_REGISTRATION} from "../actions/actions";

export function enteredRegistration (state = {}, action) {
    switch (action.type) {
        case ENTERED_REGISTRATION:
            return {
                ...state,
                ...action.data
            };
        default:
            return state
    }
}