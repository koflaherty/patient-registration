import React from 'react';
import renderer from "react-test-renderer";
import Submitted from "./submitted";
import { MemoryRouter } from 'react-router-dom';

it('renders snapshot', () => {
    const tree = renderer
        .create(<MemoryRouter><Submitted/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});