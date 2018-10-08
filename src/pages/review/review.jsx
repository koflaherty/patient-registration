import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ENTERED_REGISTRATION_STATE_KEY } from "../../redux/store/store";
import { submitRegistration } from '../../redux/actions/actions';
import { omit, startCase } from 'lodash';
import moment from 'moment';
import { Button } from 'antd';
import { HOME_PAGE, SUBMITTED_PAGE } from "../../constants/routes";

class Review extends Component {
    constructor() {
        super();

        this.onConfirmation = this.onConfirmation.bind(this);
        this._getRegistrationData = this._getRegistrationData.bind(this);
    }

    onConfirmation() {
        const { store } = this.context;

        store.dispatch(submitRegistration());
    }

    _getRegistrationData() {
        const state = this.context.store.getState();
        return ( state && state[ENTERED_REGISTRATION_STATE_KEY] ) || {};
    }

    _getSummary() {
        const ignoreKeys = ["agree"];
        const summaryData = omit(this._getRegistrationData(), ignoreKeys);

        const summaryItems = Object.entries(summaryData).map(([key, value]) => {
            if (value instanceof moment) {
                value = value.format('MMMM Do YYYY');
            }

            return (
                <li key={key}>{`${startCase(key)}: ${value}`}</li>
            );
        });

        return (
            <ul>{ summaryItems }</ul>
        );
    }

    render() {
       return (
           <div>
               <h1>Does this information look correct?</h1>
               <div>{ this._getSummary() }</div>
               <Link to={HOME_PAGE}>
                   <Button style={ { marginRight: '10px' } }>
                       Edit Info
                   </Button>
               </Link>
               <Link to={SUBMITTED_PAGE} onClick={this.onConfirmation}>
                   <Button type="primary">
                       Complete Registration
                   </Button>
               </Link>
           </div>
       );
    }
}

Review.contextTypes = {
    store: PropTypes.object
};

export default Review;

