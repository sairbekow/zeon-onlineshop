import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import App from './components/App/App';

import './index.scss';

export const _apiBase = 'http://localhost:3001'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);