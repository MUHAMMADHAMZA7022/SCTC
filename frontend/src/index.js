import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store  from './redux/store'
import { Provider } from 'react-redux'
import { positions, transitions, Provider as Alertprovider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  timeout: 2000,
  offset: '25px',
  positions: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE,
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
      <Alertprovider template={AlertTemplate} {...options}>
      <App />
    </Alertprovider>
  
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
