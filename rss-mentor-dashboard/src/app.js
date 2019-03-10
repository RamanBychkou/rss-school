import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Common from './components/commonTemplate';

const data = require('./data.json');

// localStorage.setItem('mentor', 'Aleh Lipski');
// data = JSON.parse(data);
console.log(data);
ReactDOM.render(<Common />, document.querySelector('#root'),
);
