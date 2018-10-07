import React, { Component } from 'react';
import 'antd/dist/antd.css';
import RegistrationContainer from './registration/registration-container';
import Review from './review/review';
import Submitted from './submitted/submitted';
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
    constructor() {
        super();
        this.onRegistrationSubmit = this.onRegistrationSubmit.bind(this);
    }

    onRegistrationSubmit(arg) {
        console.log(store.getState());
        this.setState({
            showSummary: true
        });
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/"  component={RegistrationContainer} />
                        <Route exact path="/summary" component={Review} />
                        <Route exact path="/submitted" component={Submitted} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
