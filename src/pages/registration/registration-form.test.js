import React from 'react';
import RegistrationForm from './registration-form';

import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import {store} from "../../redux/store/store";

it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}><RegistrationForm/></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});