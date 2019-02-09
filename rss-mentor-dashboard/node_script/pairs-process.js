const xlsx = require('node-xlsx');
const tasks = require('./tasks-process');
const tasksMarks = require('./score-process');

let dataSchool = {};
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
let studentgitgub = 2;
mentorsFromFile = mentorsFromFile.slice(1, mentorsFromFile.length -2);
let a;
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
    a = mentor;
    //console.log('vv  ', mentor)
    //console.log('aa  ', tasksMarks[mentor]);
    if (tasksMarks[mentor] !== undefined) {
      tempMentor.tasks = tasksMarks[mentor];
    } else {
      tempMentor.tasks = null;
    }
  }
});
console.log('vv  ', a)
    console.log('aa  ', tasksMarks.a);
//console.log('gen  ', dataSchool);
module.exports.dataSchool = dataSchool;