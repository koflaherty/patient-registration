import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ENTERED_REGISTRATION_STATE_KEY } from "../redux/store/store";
import { submitRegistration } from '../redux/actions/actions';

class Review extends Component {
    constructor() {
        super();

        this.onConfirmation = this.onConfirmation.bind(this);
    }

    onConfirmation() {
        const { store } = this.context;
        store.dispatch(submitRegistration());
    }

    render() {
       const { store } = this.context;
       const state = store.getState();
       const registrationData = state && state[ENTERED_REGISTRATION_STATE_KEY];

       return (
           <div>
               <Link to="/">Back</Link>
               <div>{ JSON.stringify(registrationData)}</div>
               <Link to="/submitted" onClick={this.onConfirmation()}>Confirm Info</Link>
           </div>
       );
    }
}

Review.contextTypes = {
    store: PropTypes.object
};

export default Review;

