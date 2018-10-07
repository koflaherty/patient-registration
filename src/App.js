import React, { Component } from 'react';
import 'antd/dist/antd.css';
import RegistrationContainer from './registration/registration-container';
import Summary from './summary/summary';
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
                        <Route path="/" exact component={RegistrationContainer} />
                        <Route path="/summary" component={Summary} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
