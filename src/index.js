import React from 'react';
import {render} from 'react-dom';

import App from './App';
import {ContextProvider} from './Context/appContext'

render(
    <ContextProvider>
        <App />
    </ContextProvider>, document.getElementById('root'));


