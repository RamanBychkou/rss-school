const fs = require('fs');
const xlsx = require('node-xlsx');
let dataSchool = {};
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



dataSchool.taskInfo = tasks;
// parse Mentor Stundents Pair
const mentorStudentsPairs = xlsx.parse(`${__dirname}/data/Mentor-students pairs.xlsx`);
const pairsFromFile = mentorStudentsPairs[0].data;
let mentorsFromFile = mentorStudentsPairs[1].data
let mentorName = 0;
let mentorSurname = 1;
let city = 2;
let count = 3;
let mentorGithub = 4
let studentGitgub = 1;
mentorsFromFile = mentorsFromFile.slice(0, mentorsFromFile.length -2);
let pairs = {};
pairsFromFile.forEach((current, index) => {
  
  let mentor = current[mentorName];
  let student = current[studentGitgub]
  if(pairs[mentor] === undefined) {
    pairs[mentor] = {};
    pairs[mentor][student] = {
      github: student,
    };
    //console.log(current )
  } else {
    pairs[mentor][student] = {
      github: student
    };
  }

});

// parse Mentore Score
const mentorScoreFromFile = xlsx.parse(`${__dirname}/data/Mentor score.xlsx`);
const dataScore = mentorScoreFromFile[0].data;
const mentorsGithubScore = 1;
const studentGithubScore = 2;
const taskNameScore = 3;
const mark = 5;
let tasksMarks = {};

dataScore.forEach((current) => {
  let mentor = current[mentorsGithubScore];
  mentor = mentor.toLowerCase();
  let student = current[studentGithubScore];
  student = student.toLowerCase()
  let taskName = current[taskNameScore];
  if(tasksMarks[mentor] !== undefined) {
    if(tasksMarks[mentor][taskName] !== undefined) {
      tasksMarks[mentor][taskName][student] = current[mark]
    } else {
      tasksMarks[mentor][taskName] = {}
      tasksMarks[mentor][taskName][student] = current[mark]
    }
  } else {
    tasksMarks[mentor] = {};
    tasksMarks[mentor][taskName] = {}
    tasksMarks[mentor][taskName][student] = current[mark]
  }
});

// merge nameMentors data
mentorsFromFile.forEach((current) => {
  let mentor = current[mentorGithub];
  if(mentor !== undefined) {
    mentor = mentor.toLowerCase()
    dataSchool[`${current[mentorName]} ${current[mentorSurname]}`] = {};
    let tempMentor = dataSchool[`${current[mentorName]} ${current[mentorSurname]}`];
    tempMentor.name = `${current[mentorName]} ${current[mentorSurname]}`;
    tempMentor.github = mentor;
    tempMentor.city = current[city];
    tempMentor.count = current[count];
    //console.log(pairs[tempMentor.name])
    //tempMentor.students = pairs[tempMentor.name];
    if (tasksMarks[mentor] !== undefined) {
      tempMentor.tasks = tasksMarks[mentor];
    } else {
      tempMentor.tasks = null;
    }
  }
});

const dataFile = JSON.stringify(dataSchool);
const filepath = './src/data.json'
fs.appendFile(filepath, dataFile, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});