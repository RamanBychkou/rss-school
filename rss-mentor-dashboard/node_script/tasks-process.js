const xlsx = require('node-xlsx');

//parse Tasks
let tasksFromFile = xlsx.parse(`${__dirname}/data/Tasks.xlsx`);
tasksFromFile = tasksFromFile[0].data;

const tasks = [];
const taskName = 0;
const taskLink = 1;
const taskStatus = 2;
tasksFromFile.forEach((current) => {
  let tempTask = {};
  tempTask[current[taskName]] = {
    name: current[taskName], 
    link: current[taskLink],
    status: current[taskStatus]
  }
  tasks.push(tempTask);
});
tasks.shift()
module.exports.tasks = tasks;