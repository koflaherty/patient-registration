import React, { Component } from 'react';
import RegistrationForm from './registration-form';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { enteredRegistration } from '../../redux/actions/actions';
import { ENTERED_REGISTRATION_STATE_KEY } from "../../redux/store/store";
import { SUMMARY_PAGE } from "../../constants/routes";

class RegistrationContainer extends Component {
    constructor() {
        super();

        this.state = {
            registerSuccess: false,
        };

        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
    }

    onSubmitSuccess (values) {
        const { store } = this.context;

        this.setState({
            registerSuccess: true,
        });

        store.dispatch(enteredRegistration(values));
    }

    render() {
        const { store } = this.context;
        const storeState = store.getState();
        const initialData = storeState && storeState[ENTERED_REGISTRATION_STATE_KEY];

        return (
            <div>
                <h1>Patient Registration</h1>
                <RegistrationForm onSubmit={this.onSubmitSuccess} initialValues={ initialData }/>
                { this.state.registerSuccess && <Redirect push to={SUMMARY_PAGE} /> }
            </div>
        );
    }
}

RegistrationContainer.contextTypes = {
    store: PropTypes.object
};

export default RegistrationContainer;