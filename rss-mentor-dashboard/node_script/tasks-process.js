const xlsx = require('node-xlsx');

// parse Tasks

module.exports = function parseTasks() {
  let tasksFromFile = xlsx.parse(`${__dirname}/data/Tasks.xlsx`);
  tasksFromFile = tasksFromFile[0].data;

  const tasks = [];
  const taskName = 0;
  const taskLink = 1;
  const taskStatus = 2;
  tasksFromFile.forEach((current) => {
    const tempTask = {
      name: current[taskName].trim(),
      link: current[taskLink],
      status: current[taskStatus],
    };
    tasks.push(tempTask);
  });
  tasks.shift();
  return tasks;
};
