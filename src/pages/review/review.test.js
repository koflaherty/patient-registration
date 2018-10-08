import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import {store} from "../../redux/store/store";
import {mount} from "enzyme/build/index";
import { MemoryRouter, Link } from 'react-router-dom';
import Review from './review';
import { HOME_PAGE, SUBMITTED_PAGE } from "../../constants/routes";

const defaultMockRegistrationData = {
    firstName: 'Kevin',
    lastName: `O'Flaherty`,
};

const reviewExample = (
    <MemoryRouter>
        <Provider store={store}>
            <Review/>
        </Provider>
    </MemoryRouter>
);

const mockRegistrationData = (data = defaultMockRegistrationData) => {
    const registrationDataMock = jest.spyOn(Review.prototype, "_getRegistrationData");
    registrationDataMock.mockImplementation(() => data);

    return registrationDataMock;
};

it('renders snapshot', () => {
    const mock = mockRegistrationData();

    const tree = renderer
        .create(reviewExample)
        .toJSON();
    expect(tree).toMatchSnapshot();

    mock.mockRestore();
});

describe('summary', () => {
    it('should render keys as words', () => {
        const mock = mockRegistrationData();

        const wrapper = mount(reviewExample);
        const liItems = wrapper.find('li');
        expect(liItems.at(0).text()).toEqual(`First Name: ${defaultMockRegistrationData['firstName']}`);
        expect(liItems.at(1).text()).toEqual(`Last Name: ${defaultMockRegistrationData['lastName']}`);
        expect(liItems.length).toEqual(2);

        mock.mockRestore();
    });

    it('should ignore undesired keys (agreed)', () => {
        const mock = mockRegistrationData({
            agree: true,
        });

        const wrapper = mount(reviewExample);
        const liItems = wrapper.find('li');
        expect(liItems.length).toEqual(0);

        mock.mockRestore();
    });
});

describe('links', () => {

    it('should have a link to home page', () => {
        const wrapper = mount(reviewExample);
        let links = wrapper.find(Link);

        expect(links.at(0).prop('to')).toEqual(HOME_PAGE);
    });

    it('should have a link to submit page', () => {
        const wrapper = mount(reviewExample);
        let links = wrapper.find(Link);

        expect(links.at(1).prop('to')).toEqual(SUBMITTED_PAGE);
    });
});