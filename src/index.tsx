import { Provider } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '~components/App';
import '~index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);