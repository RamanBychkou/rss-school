const xlsx = require('node-xlsx');

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

module.exports.tasksMarks = tasksMarks;