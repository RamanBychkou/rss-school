import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Common from './components/commonTemplate';

let data = require('./data.json');

//data = JSON.parse(data);
console.log(data);
ReactDOM.render(<Common />, document.querySelector('#root'));
