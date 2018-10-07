import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import RegisrationContainer from './pages/registration/registration-container';
import Review from './pages/review/review';
import Submitted from './pages/submitted/submitted';

const mountApp = (route) => {
    return mount(
        <MemoryRouter initialEntries={[ route || '/' ]}>
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
            const wrapper = mountApp('/summary');
            expect(wrapper.find(Review)).toHaveLength(1);
        });

        it('other pages should not be rendered', () => {
            const wrapper = mountApp('/summary');
            expect(wrapper.find(RegisrationContainer)).toHaveLength(0);
            expect(wrapper.find(Submitted)).toHaveLength(0);
        });
    });

    describe('submitted', () => {
        it('should render correct component', () => {
            const wrapper = mountApp('/submitted');
            expect(wrapper.find(Submitted)).toHaveLength(1);
        });

        it('other pages should not be rendered', () => {
            const wrapper = mountApp('/submitted');
            expect(wrapper.find(RegisrationContainer)).toHaveLength(0);
            expect(wrapper.find(Review)).toHaveLength(0);
        });
    });


});