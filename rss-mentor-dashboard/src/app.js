import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Common from './components/commonTemplate';

let data = require('./data.json');

//data = JSON.parse(data);
console.log(data.taskInfo);
ReactDOM.render(<Common />, document.querySelector('#root'));
