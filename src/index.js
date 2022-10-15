import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAOGN45vCuaYbF1-KDJI-Tq3mPiUuo3-LU',
  authDomain: 'gamestore-ac7bc.firebaseapp.com',
  projectId: 'gamestore-ac7bc',
  storageBucket: 'gamestore-ac7bc.appspot.com',
  messagingSenderId: '22510284574',
  appId: '1:22510284574:web:c29742c087f8fd7f87630f',
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
