import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//import BrowserRouter from react router
import { BrowserRouter } from 'react-router-dom';

//import CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//mapbox gl CSS
import 'mapbox-gl/dist/mapbox-gl.css';

//mapbox gl directions CSS
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

//mapbox gl geocoder CSS
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

//import custom CSS
import './assets/css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
