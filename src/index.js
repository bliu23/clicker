import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
