
/*
 * action types
 */
export const ENTERED_REGISTRATION = 'ENTERED_REGISTRATION';

export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';


/*
 * action creators
 */

export function enteredRegistration(data) {
    return { type: ENTERED_REGISTRATION, data };
}

export function submitRegistration() {
    return { type: SUBMIT_REGISTRATION };
}
