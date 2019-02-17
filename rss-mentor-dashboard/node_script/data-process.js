const fs = require('fs');
const getData = require('./mergeData');

const data = getData();

const dataFile = JSON.stringify(data);
const filepath = './src/data.json';
fs.appendFile(filepath, dataFile, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

// const dataSchool = {};
// // parse Tasks
// let tasksFromFile = xlsx.parse(`${__dirname}/data/Tasks.xlsx`);
// tasksFromFile = tasksFromFile[0].data;
//
// const tasks = [];
// const taskName = 0;
// const taskLink = 1;
// const taskStatus = 2;
// tasksFromFile.forEach((current) => {
//  let tempTask = {};
//  tempTask = {
//    name: current[taskName].trim(),
//    link: current[taskLink],
//    status: current[taskStatus],
//  };
//  tasks.push(tempTask);
// });
// tasks.shift();
//
//
// dataSchool.taskInfo = tasks;
// // parse Mentor Stundents Pair
// const mentorStudentsPairs = xlsx.parse(`${__dirname}/data/Mentor-students pairs.xlsx`);
// const pairsFromFile = mentorStudentsPairs[0].data;
// let mentorsFromFile = mentorStudentsPairs[1].data;
// const mentorName = 0;
// const mentorSurname = 1;
// const city = 2;
// const count = 3;
// const mentorGithub = 4;
// const studentGitgub = 1;
// mentorsFromFile = mentorsFromFile.slice(0, mentorsFromFile.length - 2);
// const pairs = {};
// pairsFromFile.forEach((current, index) => {
//  const mentor = current[mentorName];
//  const student = current[studentGitgub];
//  if (pairs[mentor] === undefined) {
//    pairs[mentor] = {};
//    pairs[mentor][student] = {
//      github: student,
//    };
//    // console.log(current )
//  } else {
//    pairs[mentor][student] = {
//      github: student,
//    };
//  }
// });
//
// // parse Mentore Score
// const mentorScoreFromFile = xlsx.parse(`${__dirname}/data/Mentor score.xlsx`);
// let dataScore = mentorScoreFromFile[0].data;
// const mentorsGithubScore = 1;
// const studentGithubScore = 2;
// const taskNameScore = 3;
// const mark = 5;
// const tasksMarks = {};
// dataScore = dataScore.slice(1);
// dataScore.forEach((current) => {
//  let mentor = current[mentorsGithubScore];
//  mentor = mentor.toLowerCase();
//  let student = current[studentGithubScore];
//  student = student.toLowerCase();
//  const taskName = current[taskNameScore].trim();
//  if (tasksMarks[mentor] !== undefined) {
//    if (tasksMarks[mentor].students === undefined) {
//      tasksMarks[mentor].students = {};
//      tasksMarks[mentor].students[student] = student;
//    } else {
//      tasksMarks[mentor].students[student] = student;
//    }
//
//    if (tasksMarks[mentor][taskName] !== undefined) {
//      tasksMarks[mentor][taskName][student] = current[mark];
//    } else {
//      tasksMarks[mentor][taskName] = {};
//      tasksMarks[mentor][taskName][student] = current[mark];
//    }
//  } else {
//    tasksMarks[mentor] = {};
//    tasksMarks[mentor][taskName] = {};
//    tasksMarks[mentor][taskName][student] = current[mark];
//    if (tasksMarks[mentor].students === undefined) {
//      tasksMarks[mentor].students = {};
//      tasksMarks[mentor].students[student] = student;
//    } else {
//      tasksMarks[mentor].students[student] = student;
//    }
//  }
// });
//
// // merge nameMentors data
// mentorsFromFile.forEach((current) => {
//  let mentor = current[mentorGithub];
//  if (mentor !== undefined) {
//    mentor = mentor.toLowerCase();
//    dataSchool[`${current[mentorName]} ${current[mentorSurname]}`] = {};
//    const tempMentor = dataSchool[`${current[mentorName]} ${current[mentorSurname]}`];
//    tempMentor.name = `${current[mentorName]} ${current[mentorSurname]}`;
//    tempMentor.github = mentor;
//    tempMentor.city = current[city];
//    tempMentor.count = current[count];
//    // console.log(pairs[tempMentor.name])
//    // tempMentor.students = pairs[tempMentor.name];
//    if (tasksMarks[mentor] !== undefined) {
//      tempMentor.tasks = tasksMarks[mentor];
//    } else {
//      tempMentor.tasks = null;
//    }
//  }
// });
//
// const dataFile = JSON.stringify(dataSchool);
// const filepath = './src/data.json';
// fs.appendFile(filepath, dataFile, (err) => {
//  if (err) throw err;
//  console.log('The "data to append" was appended to file!');
// });
//
