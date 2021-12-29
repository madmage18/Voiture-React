import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bulma/css/bulma.min.css';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Show cards for available juices in an inventory using react. Available juices should be in a Juice.js file.