import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ajax from './Ajax';
import Data from './Data';
import './index.css';

const data = new Data();
const ajax = new Ajax();

ajax.getJSON('/data.json')
    .then(function(response) {
        ReactDOM.render(
          <App data={data} ajaxData={response} />,
          document.getElementById('root')
        );
    }).catch(function(err) {
        console.log(err);
    });
