import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import React from 'react';
import ReactDOM from 'react-dom';
import * as dotenv from 'dotenv';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#81E2DC',
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

dotenv.config();

serviceWorker.unregister();
