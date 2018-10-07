import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './styles/styles.css';
import RegistrationContainer from './pages/registration/registration-container';
import Review from './pages/review/review';
import Submitted from './pages/submitted/submitted';
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
    constructor() {
        super();
        this.onRegistrationSubmit = this.onRegistrationSubmit.bind(this);
    }

    onRegistrationSubmit() {
        this.setState({
            showSummary: true
        });
    }

    render() {
        return (
            <div className="page">
                <Provider store={store}>
                    <BrowserRouter>
                        <div className="page__content">
                            <Route exact path="/"  component={RegistrationContainer} />
                            <Route exact path="/summary" component={Review} />
                            <Route exact path="/submitted" component={Submitted} />
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
