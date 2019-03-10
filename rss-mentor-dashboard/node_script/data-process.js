const fs = require('fs');
const getData = require('./mergeData');

const data = getData();

const dataFile = JSON.stringify(data);
const filepath = './src/data.json';
fs.appendFile(filepath, dataFile, (err) => {
  if (err) throw err;
});
