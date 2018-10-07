import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Summary extends Component {
    constructor() {
        super();
    }

    render() {
       const { store } = this.context;
       const state = store.getState();
       const registrationData = state.form && state.form['registration'] && state.form['registration'].values;

       return (
           <div>
               <Link to="/">Back</Link>
                <div>{ JSON.stringify(registrationData)}</div>
           </div>
       );
    }
}

Summary.contextTypes = {
    store: PropTypes.object
};

export default Summary;

