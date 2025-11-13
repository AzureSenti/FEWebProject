import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // 1. Import Provider
import { store } from './store/store';  // 2. Import store
import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);