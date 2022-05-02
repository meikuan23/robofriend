import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello.js';
import App2 from './containers/App2.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import {robots} from './robots.js';

ReactDOM.render(<App2 />, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(<App2 />) -- version 18
  {/*<React.StrictMode>*/}
    {/*<App2 />, document.getElementById('root'));*/}
    {/*<Hello greeting={'Hello ' + 'React Ninja'}/>*/}
    {/*<CardList robots={robots}/>*/}
  // </React.StrictMode>,

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // change to registered service worker
