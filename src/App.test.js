import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import RegisrationContainer from './pages/registration/registration-container';
import Review from './pages/review/review';
import Submitted from './pages/submitted/submitted';
import { HOME_PAGE, SUMMARY_PAGE, SUBMITTED_PAGE } from "./constants/routes";

const mountApp = (route) => {
    return mount(
        <MemoryRouter initialEntries={[ route || HOME_PAGE ]}>
            <App/>
        </MemoryRouter>
    );
};

it('renders without crashing', () => {
    mountApp();
});

describe('routes', () => {

    describe('home', () => {
        it('should render correct component', () => {
            const wrapper = mountApp();
            expect(wrapper.find(RegisrationContainer)).toHaveLength(1);
        });

        it('other pages should not be rendered', () => {
            const wrapper = mountApp();

            expect(wrapper.find(Review)).toHaveLength(0);
            expect(wrapper.find(Submitted)).toHaveLength(0);
        });
    });


    describe('summary', () => {
        it('should render correct component', () => {
            const wrapper = mountApp(SUMMARY_PAGE);
            expect(wrapper.find(Review)).toHaveLength(1);
        });

        it('other pages should not be rendered', () => {
            const wrapper = mountApp(SUMMARY_PAGE);
            expect(wrapper.find(RegisrationContainer)).toHaveLength(0);
            expect(wrapper.find(Submitted)).toHaveLength(0);
        });
    });

    describe('submitted', () => {
        it('should render correct component', () => {
            const wrapper = mountApp(SUBMITTED_PAGE);
            expect(wrapper.find(Submitted)).toHaveLength(1);
        });

        it('other pages should not be rendered', () => {
            const wrapper = mountApp(SUBMITTED_PAGE);
            expect(wrapper.find(RegisrationContainer)).toHaveLength(0);
            expect(wrapper.find(Review)).toHaveLength(0);
        });
    });


});