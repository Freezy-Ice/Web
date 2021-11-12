import * as dotenv from 'dotenv';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Store } from './Store';

function App() {
    dotenv.config();

    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
