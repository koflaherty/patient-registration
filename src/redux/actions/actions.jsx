
/*
 * action types
 */
export const ENTERED_REGISTRATION = 'ENTERED_REGISTRATION';


/*
 * action creators
 */

export function enteredRegistration(data) {
    return { type: ENTERED_REGISTRATION, data };
}
