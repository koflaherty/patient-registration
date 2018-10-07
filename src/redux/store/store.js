import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { enteredRegistration } from "../reducers/reducers";

export const ENTERED_REGISTRATION_STATE_KEY = 'registration';

const reducer = combineReducers({
    form: reduxFormReducer,
    [ENTERED_REGISTRATION_STATE_KEY]: enteredRegistration,
});

export const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);
