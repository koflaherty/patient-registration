import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from "../../constants/routes";

export default function() {
    return (
        <div>
            <h1>Registration Complete</h1>
            <p>Someone will be with you shortly.</p>
            <Link to={HOME_PAGE}>Register Another Patient</Link>
        </div>
    );
};