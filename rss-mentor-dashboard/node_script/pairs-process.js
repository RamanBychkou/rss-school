
const xlsx = require('node-xlsx');
let tasks = require('./tasks-process');

module.exports = function parseScore() {
  tasks = tasks();

  // parse Mentor Stundents Pair
  const mentorStudentsPairs = xlsx.parse(`${__dirname}/data/Mentor-students pairs.xlsx`);
  const pairsFromFile = mentorStudentsPairs[0].data;
  const mentorsFromFile = mentorStudentsPairs[1].data;

  // parse mentors data
  const mentorName = 0;
  const mentorSurname = 1;
  const mentorCity = 2;
  const studentsCount = 3;
  const mentorGithub = 4;

  let mentorsData = mentorsFromFile.map((current) => {
    const tempMentor = {};
    tempMentor.name = `${current[mentorName]} ${current[mentorSurname]}`;
    tempMentor.mentorGithub = current[mentorGithub];
    tempMentor.studentsCount = current[studentsCount];
    tempMentor.city = current[mentorCity];

    return tempMentor;
  });

  // parse students group
  const studentGithub = 1;
  const pairs = {};
  pairsFromFile.forEach((current) => {
    const mentor = current[mentorName];
    const student = current[studentGithub];
    if (pairs[mentor] === undefined) {
      pairs[mentor] = {};
      pairs[mentor][student] = {
        github: student,
      };
      // console.log(current )
    } else {
      pairs[mentor][student] = {
        github: student,
      };
    }
  });
  mentorsData = mentorsData.map((current, index) => {
    mentorsData[index].students = pairs[current.name];
    mentorsData[index].tasks = tasks;
    return current;
  });
  mentorsData.shift();
  return mentorsData;
};
