import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ENTERED_REGISTRATION_STATE_KEY } from "../../redux/store/store";
import { submitRegistration } from '../../redux/actions/actions';

class Review extends Component {
    constructor() {
        super();

        this.onConfirmation = this.onConfirmation.bind(this);
        this._getRegistrationData = this._getRegistrationData.bind(this);
    }

    onConfirmation() {
        const { store } = this.context;

        console.log("Submitted Data");
        console.log(this._getRegistrationData());

        store.dispatch(submitRegistration());
    }

    _getRegistrationData() {
        const state = this.context.store.getState();
        return state && state[ENTERED_REGISTRATION_STATE_KEY];
    }

    render() {
       const registrationData = this._getRegistrationData();

       return (
           <div>
               <Link to="/">Back</Link>
               <div>{ JSON.stringify(registrationData)}</div>
               <Link to="/submitted" onClick={this.onConfirmation}>Confirm Info</Link>
           </div>
       );
    }
}

Review.contextTypes = {
    store: PropTypes.object
};

export default Review;

