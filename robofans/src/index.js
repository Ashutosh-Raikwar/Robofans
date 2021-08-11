import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cardlist from './Cardlist';
import reportWebVitals from './reportWebVitals';
import tachyons from 'tachyons';
import {robots} from './components/robots'

ReactDOM.render(
  <React.StrictMode>
    <Cardlist  robots={robots}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();