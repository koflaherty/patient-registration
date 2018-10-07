import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
            <h1>Registration Complete</h1>
            <p>Someone will be with you shortly.</p>
            <Link to="/">Register Another Patient</Link>
        </div>
    );
};