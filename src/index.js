import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import './index.css';
import App from './components/App/App';

export const firebaseConfig = {
  apiKey: "AIzaSyA5SEqSRgW42WRCRR9li5cQ12htVczm5_8",
  authDomain: "zeon-onlineshop.firebaseapp.com",
  projectId: "zeon-onlineshop",
  storageBucket: "zeon-onlineshop.appspot.com",
  messagingSenderId: "669028139952",
  appId: "1:669028139952:web:c44358dd8d70a2bd074c75",
  measurementId: "G-TW8M4DHMQH"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);